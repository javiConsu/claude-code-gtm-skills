-- Run this in your Supabase SQL editor

create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  perfil_tipo text,
  perfil_secundario text,
  señal_estrella text,
  señales_activas text[],
  keywords text[],
  icp jsonb,
  credits integer not null default 20,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Auto-create profile on signup with 20 free credits
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (user_id, credits)
  values (new.id, 20);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- RLS: users can only see/edit their own profile
alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = user_id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = user_id);
