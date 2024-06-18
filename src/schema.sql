-- Adminer 4.8.1 PostgreSQL 16.3 (Debian 16.3-1.pgdg120+1) dump

DROP TABLE IF EXISTS "banner";
DROP SEQUENCE IF EXISTS banner_id_seq;
CREATE SEQUENCE banner_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."banner" (
    "id" integer DEFAULT nextval('banner_id_seq') NOT NULL,
    "description" text NOT NULL,
    CONSTRAINT "banner_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "concept";
DROP SEQUENCE IF EXISTS concept_id_seq;
CREATE SEQUENCE concept_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."concept" (
    "id" integer DEFAULT nextval('concept_id_seq') NOT NULL,
    "title" character varying NOT NULL,
    "description" text NOT NULL,
    "image" text NOT NULL,
    CONSTRAINT "concept_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "menu";
DROP SEQUENCE IF EXISTS menu_id_seq;
CREATE SEQUENCE menu_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."menu" (
    "id" integer DEFAULT nextval('menu_id_seq') NOT NULL,
    "title" character varying NOT NULL,
    "description" text NOT NULL,
    CONSTRAINT "menu_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "user";
DROP SEQUENCE IF EXISTS user_id_seq;
CREATE SEQUENCE user_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."user" (
    "id" integer DEFAULT nextval('user_id_seq') NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL,
    "email" character varying NOT NULL,
    "password" character varying NOT NULL,
    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


-- 2024-06-18 09:17:36.797636+00