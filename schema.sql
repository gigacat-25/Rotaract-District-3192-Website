-- Rotaract District 3192 - Database Schema (Cloudflare D1)

-- Users Table: Stores member profiles, roles, and achievements
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY, -- Clerk User ID
    email TEXT UNIQUE NOT NULL,
    first_name TEXT,
    last_name TEXT,
    role TEXT DEFAULT 'member', -- 'member', 'club_admin', 'district_admin'
    club_id TEXT, -- Foreign key to clubs table
    bio TEXT,
    avatar_url TEXT,
    points INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Clubs Table: Stores club information
CREATE TABLE IF NOT EXISTS clubs (
    id TEXT PRIMARY KEY, -- ULID or UUID
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    charter_date DATETIME,
    description TEXT,
    logo_url TEXT,
    president_id TEXT, -- Foreign key to users
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Events Table: Stores initiatives and projects
CREATE TABLE IF NOT EXISTS events (
    id TEXT PRIMARY KEY,
    club_id TEXT NOT NULL, -- Foreign key to clubs
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    event_date DATETIME NOT NULL,
    location TEXT,
    image_url TEXT,
    is_signature_project BOOLEAN DEFAULT FALSE,
    status TEXT DEFAULT 'upcoming', -- 'upcoming', 'past', 'cancelled'
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (club_id) REFERENCES clubs(id)
);

-- Event Registrations
CREATE TABLE IF NOT EXISTS event_registrations (
    id TEXT PRIMARY KEY,
    event_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    registered_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'confirmed', -- 'confirmed', 'attended', 'cancelled'
    FOREIGN KEY (event_id) REFERENCES events(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE(event_id, user_id)
);

-- Treasury / Campaigns Table: For crowdfunding initiatives
CREATE TABLE IF NOT EXISTS campaigns (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    goal_amount REAL NOT NULL,
    raised_amount REAL DEFAULT 0,
    status TEXT DEFAULT 'active', -- 'active', 'completed', 'paused'
    created_by TEXT NOT NULL, -- Admin User ID
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Cold Storage Table: Metadata for files stored in Cloudflare R2
CREATE TABLE IF NOT EXISTS cold_storage_files (
    id TEXT PRIMARY KEY,
    file_name TEXT NOT NULL,
    file_size INTEGER NOT NULL,
    mime_type TEXT,
    r2_key TEXT UNIQUE NOT NULL, -- Path/Key in R2 bucket
    uploaded_by TEXT NOT NULL, -- Admin User ID
    category TEXT DEFAULT 'general', -- e.g., 'reports', 'media', 'documents'
    is_public BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(id)
);

-- User Achievements Table
CREATE TABLE IF NOT EXISTS user_achievements (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    badge_icon TEXT, -- URL or icon name
    awarded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
