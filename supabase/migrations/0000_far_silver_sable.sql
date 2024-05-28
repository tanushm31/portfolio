CREATE TABLE IF NOT EXISTS "project_tags_correlation_table" (
	"project_id" integer,
	"tag_id" integer,
	CONSTRAINT "project_tags_correlation_table_project_id_tag_id_pk" PRIMARY KEY("project_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_table" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"url" text NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tags_table" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_tags_correlation_table" ADD CONSTRAINT "project_tags_correlation_table_project_id_projects_table_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_tags_correlation_table" ADD CONSTRAINT "project_tags_correlation_table_tag_id_tags_table_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
