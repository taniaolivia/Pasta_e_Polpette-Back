-- Adminer 4.8.1 PostgreSQL 16.3 (Debian 16.3-1.pgdg120+1) dump

DROP TABLE IF EXISTS "contact";
DROP SEQUENCE IF EXISTS contact_id_seq;
CREATE SEQUENCE contact_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."contact" (
    "id" integer DEFAULT nextval('contact_id_seq') NOT NULL,
    "title" character varying(100) NOT NULL,
    "description" character varying(300),
    "telephone" character varying(50) NOT NULL,
    "email" character varying(100) NOT NULL,
    "address" character varying(200) NOT NULL,
    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "restaurant";
DROP SEQUENCE IF EXISTS restaurant_id_seq;
CREATE SEQUENCE restaurant_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."restaurant" (
    "id" integer DEFAULT nextval('restaurant_id_seq') NOT NULL,
    "title" character varying(100) NOT NULL,
    "name" character varying(100) NOT NULL,
    "address" character varying(200) NOT NULL,
    "schedule" character varying(200) NOT NULL,
    "telephone" character varying(50),
    "email" character varying(100) NOT NULL,
    "access" character varying(200),
    CONSTRAINT "restaurant_pkey" PRIMARY KEY ("id")
) WITH (oids = false);