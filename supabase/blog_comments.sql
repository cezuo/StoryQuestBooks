create table if not exists public.blog_comments (
  id bigint generated always as identity primary key,
  post_id bigint not null,
  parent_id bigint references public.blog_comments(id) on delete cascade,
  author text not null check (char_length(trim(author)) > 0),
  content text not null check (char_length(trim(content)) > 0),
  likes integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists blog_comments_post_id_idx
  on public.blog_comments(post_id);

create index if not exists blog_comments_parent_id_idx
  on public.blog_comments(parent_id);

alter table public.blog_comments enable row level security;

-- Allow visitors to read all comments.
create policy "Public read blog comments"
  on public.blog_comments
  for select
  to anon, authenticated
  using (true);

-- Allow visitors to add top-level comments and replies.
create policy "Public insert blog comments"
  on public.blog_comments
  for insert
  to anon, authenticated
  with check (true);

-- Allow visitors to update comments. The app only uses this for likes.
create policy "Public update blog comments"
  on public.blog_comments
  for update
  to anon, authenticated
  using (true)
  with check (true);
