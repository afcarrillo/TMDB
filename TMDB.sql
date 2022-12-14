CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "lastname" varchar,
  "email" varchar
);

CREATE TABLE "movies" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar,
  "year" int,
  "overview" text,
  "genre_id" int,
  "score" int,
  "poster_url" varchar
);

CREATE TABLE "tv_shows" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar,
  "year" int,
  "network_id" int,
  "overview" text,
  "genre_id" int,
  "type_id" int,
  "score" int,
  "poster_url" varchar
);

CREATE TABLE "favoritemovies" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "movie_id" int
);

CREATE TABLE "favoritetv_shows" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "tvshow_id" int
);

CREATE TABLE "types" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "networks" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "genres" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "moviesgenres" (
  "id" SERIAL PRIMARY KEY,
  "movie_id" int,
  "genre_id" int
);

CREATE TABLE "tv_showsgenres" (
  "id" SERIAL PRIMARY KEY,
  "tv_show_id" int,
  "genre_id" int
);

CREATE TABLE "actors" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "lastname" varchar
);

CREATE TABLE "directors" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "lastname" varchar
);

CREATE TABLE "moviesactors" (
  "id" SERIAL PRIMARY KEY,
  "movie_id" int,
  "actor_id" int
);

CREATE TABLE "moviesdirectors" (
  "id" SERIAL PRIMARY KEY,
  "movie_id" int,
  "director_id" int
);

CREATE TABLE "tv_showsactors" (
  "id" SERIAL PRIMARY KEY,
  "tv_show_id" int,
  "actor_id" int
);

CREATE TABLE "tv_showsdirectors" (
  "id" SERIAL PRIMARY KEY,
  "tv_show_id" int,
  "director_id" int
);

ALTER TABLE "favoritemovies" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "favoritemovies" ADD FOREIGN KEY ("movie_id") REFERENCES "movies" ("id");

ALTER TABLE "favoritetv_shows" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "favoritetv_shows" ADD FOREIGN KEY ("tvshow_id") REFERENCES "tv_shows" ("id");

ALTER TABLE "tv_shows" ADD FOREIGN KEY ("type_id") REFERENCES "types" ("id");

ALTER TABLE "tv_shows" ADD FOREIGN KEY ("network_id") REFERENCES "networks" ("id");

ALTER TABLE "moviesgenres" ADD FOREIGN KEY ("movie_id") REFERENCES "movies" ("id");

ALTER TABLE "moviesgenres" ADD FOREIGN KEY ("genre_id") REFERENCES "genres" ("id");

ALTER TABLE "tv_showsgenres" ADD FOREIGN KEY ("tv_show_id") REFERENCES "tv_shows" ("id");

ALTER TABLE "tv_showsgenres" ADD FOREIGN KEY ("genre_id") REFERENCES "genres" ("id");

ALTER TABLE "moviesactors" ADD FOREIGN KEY ("movie_id") REFERENCES "movies" ("id");

ALTER TABLE "moviesactors" ADD FOREIGN KEY ("actor_id") REFERENCES "actors" ("id");

ALTER TABLE "moviesdirectors" ADD FOREIGN KEY ("movie_id") REFERENCES "movies" ("id");

ALTER TABLE "moviesdirectors" ADD FOREIGN KEY ("director_id") REFERENCES "directors" ("id");

ALTER TABLE "tv_showsactors" ADD FOREIGN KEY ("tv_show_id") REFERENCES "tv_shows" ("id");

ALTER TABLE "tv_showsactors" ADD FOREIGN KEY ("actor_id") REFERENCES "actors" ("id");

ALTER TABLE "tv_showsdirectors" ADD FOREIGN KEY ("tv_show_id") REFERENCES "tv_shows" ("id");

ALTER TABLE "tv_showsdirectors" ADD FOREIGN KEY ("director_id") REFERENCES "directors" ("id");
