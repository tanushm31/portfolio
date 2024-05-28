import { table } from "console";
import {
	integer,
	pgTable,
	serial,
	text,
	timestamp,
	primaryKey,
} from "drizzle-orm/pg-core";

export const projectsTable = pgTable("projects_table", {
	id: integer("id").primaryKey(),
	name: text("name").notNull(),
	url: text("url").notNull(),
	description: text("description"),
	// list of tag ids separated by comma
	// tags: list,
});

export const tags = pgTable("tags_table", {
	id: integer("id").primaryKey(),
	title: text("title").notNull(),
	// content: text("content").notNull(),
	// userId: integer("user_id")
	// 	.notNull()
	// 	.references(() => usersTable.id, { onDelete: "cascade" }),
	// createdAt: timestamp("created_at").notNull().defaultNow(),
	// updatedAt: timestamp("updated_at")
	// 	.notNull()
	// 	.$onUpdate(() => new Date()),
});

export const projectTagsCorrelationTable = pgTable(
	"project_tags_correlation_table",
	{
		projectID: integer("project_id").references(() => projectsTable.id),
		tagID: integer("tag_id").references(() => tags.id),
	},
	(table) => ({
		pk: primaryKey({ columns: [table.projectID, table.tagID] }),
	})
);

export type InsertProject = typeof projectsTable.$inferInsert;
export type SelectProjects = typeof projectsTable.$inferSelect;

export type InsertTags = typeof tags.$inferInsert;
export type SelectTags = typeof tags.$inferSelect;
