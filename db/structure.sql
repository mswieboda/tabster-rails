--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.3
-- Dumped by pg_dump version 9.6.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: migration_versions; Type: TABLE; Schema: public; Owner: tabster
--

CREATE TABLE migration_versions (
    id integer NOT NULL,
    version character varying(17)
);


ALTER TABLE migration_versions OWNER TO tabster;

--
-- Name: migration_versions_id_seq; Type: SEQUENCE; Schema: public; Owner: tabster
--

CREATE SEQUENCE migration_versions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE migration_versions_id_seq OWNER TO tabster;

--
-- Name: migration_versions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tabster
--

ALTER SEQUENCE migration_versions_id_seq OWNED BY migration_versions.id;


--
-- Name: tabs; Type: TABLE; Schema: public; Owner: tabster
--

CREATE TABLE tabs (
    id integer NOT NULL,
    title character varying(254),
    tab character varying(254),
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE tabs OWNER TO tabster;

--
-- Name: tabs_id_seq; Type: SEQUENCE; Schema: public; Owner: tabster
--

CREATE SEQUENCE tabs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tabs_id_seq OWNER TO tabster;

--
-- Name: tabs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tabster
--

ALTER SEQUENCE tabs_id_seq OWNED BY tabs.id;


--
-- Name: migration_versions id; Type: DEFAULT; Schema: public; Owner: tabster
--

ALTER TABLE ONLY migration_versions ALTER COLUMN id SET DEFAULT nextval('migration_versions_id_seq'::regclass);


--
-- Name: tabs id; Type: DEFAULT; Schema: public; Owner: tabster
--

ALTER TABLE ONLY tabs ALTER COLUMN id SET DEFAULT nextval('tabs_id_seq'::regclass);


--
-- Name: migration_versions migration_versions_pkey; Type: CONSTRAINT; Schema: public; Owner: tabster
--

ALTER TABLE ONLY migration_versions
    ADD CONSTRAINT migration_versions_pkey PRIMARY KEY (id);


--
-- Name: tabs tabs_pkey; Type: CONSTRAINT; Schema: public; Owner: tabster
--

ALTER TABLE ONLY tabs
    ADD CONSTRAINT tabs_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

