-- Create contacts table for storing contact form submissions
create table if not exists public.contacts (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    email text not null,
    phone text,
    address text,
    message text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS) for contacts
alter table public.contacts enable row level security;

-- Create policy to allow any user to insert data (for contact form)
create policy "Allow public to insert contacts" 
on public.contacts 
for insert 
with check (true);

-- Create policy to allow authenticated users (admin) to view data
create policy "Allow authenticated users to view contacts" 
on public.contacts 
for select 
to authenticated 
using (true);

-- Create projects table for portfolio
create table if not exists public.projects (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    description text,
    image_url text not null,
    category text,
    display_order integer default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for projects
alter table public.projects enable row level security;

-- Allow anyone to view projects
create policy "Allow public to view projects" 
on public.projects 
for select 
using (true);

-- Allow authenticated users to manage projects
create policy "Allow authenticated users to manage projects" 
on public.projects 
for all 
to authenticated 
using (true)
with check (true);

-- Create services table
create table if not exists public.services (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    description text,
    icon_name text,
    image_url text,
    features text[],
    display_order integer default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for services
alter table public.services enable row level security;

-- Allow anyone to view services
create policy "Allow public to view services" 
on public.services 
for select 
using (true);

-- Allow authenticated users to manage services
create policy "Allow authenticated users to manage services" 
on public.services 
for all 
to authenticated 
using (true)
with check (true);
