-- Database: MIS Child Orphans
-- SET AUTOCOMMIT = ON;
-- DROP DATABASE IF EXISTS "MIS Child Orphans";

-- CREATE DATABASE "MIS Child Orphans"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE "Role_map" (
  "Role_NO" INT PRIMARY KEY,
  "Table" VARCHAR(30)
);

CREATE INDEX "Key1" ON  "Role_map" ("Role_NO");

CREATE TABLE "All_User" (
  "ID" SERIAL PRIMARY KEY,
  "Username" VARCHAR(20) unique,
  "Role_NO" INT,
  FOREIGN KEY ("Role_NO")
      REFERENCES "Role_map"("Role_NO")
);

CREATE INDEX "Key2" ON  "All_User" ("ID");

CREATE TABLE "Orphanage" (
  "Orphanage_ID" SERIAL PRIMARY KEY,
  "orphanage name " VARCHAR(20),
  "address" VARCHAR(20),
  "contact" INT,
  "capacity" INT,
  "employee_count" INT,
  "Email" VARCHAR(20)
);

CREATE INDEX "Key3" ON "Orphanage" ("Orphanage_ID");

CREATE TABLE "Admin" (
  "ID" INT PRIMARY KEY,
  "Password" VARCHAR(100),
  FOREIGN KEY ("ID")
      REFERENCES "All_User"("ID")
);

CREATE INDEX "Key4" ON  "Admin" ("ID");

CREATE TABLE "Super_Employee_Manager" (
  "ID" INT PRIMARY KEY,
  "Employee_Name" VARCHAR(20),
  "password" VARCHAR(100),
  "Age" INT,
  "Address" VARCHAR(50),
  "contact" VARCHAR(15),
  "Email" VARCHAR(30),
  FOREIGN KEY ("ID")
      REFERENCES "All_User"("ID")
);

CREATE INDEX "Key5" ON  "Super_Employee_Manager" ("ID");

CREATE TABLE "Employee_Orphan_Manager" (
  "ID" INT PRIMARY KEY,
  "Employee Name" VARCHAR(20),
  "password" VARCHAR(100),
  "Age" INT,
  "Address" VARCHAR(50),
  "contact" VARCHAR(15),
  "Email" VARCHAR(30),
  "Orphanage_ID" INT,
  FOREIGN KEY ("ID")
      REFERENCES "All_User"("ID"),
  FOREIGN KEY ("Orphanage_ID")
      REFERENCES "Orphanage"("Orphanage_ID")
);

CREATE INDEX "Key6" ON  "Employee_Orphan_Manager" ("ID");

CREATE TABLE "User" (
  "ID" INT PRIMARY KEY,
  "Name" VARCHAR(20),
  "password" VARCHAR(100),
  "Age" INT,
  "Address" VARCHAR(50),
  "contact" VARCHAR(15),
  "Email" VARCHAR(30),
  FOREIGN KEY ("ID")
      REFERENCES "All_User"("ID")
);

CREATE INDEX "Key7" ON  "User" ("ID");

CREATE TABLE "Child" (
  "Child_ID" SERIAL PRIMARY KEY,
  "Orphanage_ID" INT,
  "Child_Name " VARCHAR(20),
  "Age" INT,
  "Gender" VARCHAR(6),
  "Fostered" BOOLEAN,
  FOREIGN KEY ("Orphanage_ID")
      REFERENCES "Orphanage"("Orphanage_ID")
);

CREATE INDEX "Key8" ON  "Child" ("Child_ID");

CREATE TABLE "Worker" (
  "Worker_ID" SERIAL PRIMARY KEY,
  "Age" INT,
  "Address" VARCHAR(20),
  "Email" VARCHAR(20),
  "Orphanage_ID" INT,
  FOREIGN KEY ("Orphanage_ID")
      REFERENCES "Orphanage"("Orphanage_ID")
);

CREATE INDEX "Key9" ON  "Worker" ("Worker_ID");

CREATE TABLE "Document" (
  "Document_ID" SERIAL PRIMARY KEY,
  "Document_name" VARCHAR(20),
  "Created_at" TIMESTAMP,
  "Created_by" VARCHAR(20)
);

CREATE INDEX "Key10" ON  "Document" ("Document_ID");

CREATE TABLE "Funding" (
  "Fund_ID" SERIAL PRIMARY KEY,
  "Orphan_ID" INT,
  "Document_ID" INT,
  "Amount" NUMERIC(10,4),
  FOREIGN KEY ("Orphan_ID")
      REFERENCES "Orphanage"("Orphanage_ID"),
  FOREIGN KEY ("Document_ID")
      REFERENCES "Document"("Document_ID")
);

CREATE INDEX "Key11" ON  "Funding" ("Fund_ID");

CREATE TABLE "Inquiry" (
  "Inquiry_ID" SERIAL PRIMARY KEY,
  "ID" INT,
  "Child_ID" INT,
  "Inquiry_Title" VARCHAR(30),
  "Inquiry_Description" VARCHAR(30),
  "Proofs" BYTEA,
  FOREIGN KEY ("ID")
      REFERENCES "User"("ID"),
  FOREIGN KEY ("Child_ID")
      REFERENCES "Child"("Child_ID")
);

CREATE INDEX "Key12" ON  "Inquiry" ("Inquiry_ID");

CREATE TABLE "Foster_Parent" (
  "Foster_Parent_ID" SERIAL PRIMARY KEY,
  "Foster_Parnet_Name" VARCHAR(20),
  "Age" INT,
  "Gender" VARCHAR(6),
  "Address" VARCHAR(50),
  "Contact_Number" VARCHAR(15),
  "Income_Level" INT
);

CREATE INDEX "Key13" ON  "Foster_Parent" ("Foster_Parent_ID");

CREATE TABLE "Adoption" (
  "Child_ID" INT,
  "Foster_Parent_ID" INT,
  "Fostered_Date" DATE,
  PRIMARY KEY ("Child_ID", "Foster_Parent_ID"),
  FOREIGN KEY ("Foster_Parent_ID")
      REFERENCES "Foster_Parent"("Foster_Parent_ID"),
  FOREIGN KEY ("Child_ID")
      REFERENCES "Child"("Child_ID")
);

CREATE INDEX "Key14" ON  "Adoption" ("Child_ID");

CREATE TABLE "Case" (
  "Case_ID" SERIAL PRIMARY KEY,
  "Child_ID" INT,
  "Case_Title" VARCHAR(30),
  "Case_Description" VARCHAR(30),
  "Document_ID" INT,
  FOREIGN KEY ("Child_ID")
    REFERENCES "Child"("Child_ID"),
  FOREIGN KEY ("Document_ID")
    REFERENCES "Document"("Document_ID")
);

CREATE INDEX "Key15" ON  "Case" ("Case_ID");



