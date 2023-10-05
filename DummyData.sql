-- Insert data into "Role_map" table
INSERT INTO "Role_map" ("Role_NO", "Table")
VALUES
  (1, 'Admin'),
  (2, 'Super_Employee_Manager'),
  (3, 'Employee_Orphan_Manager'),
  (4, 'User');

-- Insert data into "All_User" table
INSERT INTO "All_User" ("Username", "Role_NO")
VALUES
  ('admin_user', 1),
  ('super_manager_user', 2),
  ('employee_manager_user', 3),
  ('regular_user', 4);

-- Insert data into "Orphanage" table
INSERT INTO "Orphanage" ("orphanage name ", "address", "contact", "capacity", "employee_count", "Email")
VALUES
  ('Orphanage 1', '123 Main St', '1234567890', 50, 10, 'orphanage1@example.com'),
  ('Orphanage 2', '456 Elm St', '9876543210', 75, 15, 'orphanage2@example.com'),
  ('Orphanage 3', '789 Oak St', '5556667777', 60, 8, 'orphanage3@example.com'),
  ('Orphanage 4', '101 Pine St', '1112223333', 40, 5, 'orphanage4@example.com'),
  ('Orphanage 5', '222 Birch St', '4447778888', 90, 20, 'orphanage5@example.com');

-- Insert data into "Admin" table
INSERT INTO "Admin" ("ID", "Password")
VALUES
  (1, 'admin_password'),
  (6, 'admin2_password'),
  (11, 'admin3_password'),
  (16, 'admin4_password'),
  (21, 'admin5_password');

-- Insert data into "Super_Employee_Manager" table
INSERT INTO "Super_Employee_Manager" ("ID", "Employee_Name", "password", "Age", "Address", "contact", "Email")
VALUES
  (2, 'Super Manager', 'super_password', 35, '123 Admin St', 'super@example.com', 'super_manager@example.com'),
  (7, 'Super Manager 2', 'super2_password', 40, '456 Admin St', 'super2@example.com', 'super_manager2@example.com'),
  (12, 'Super Manager 3', 'super3_password', 45, '789 Admin St', 'super3@example.com', 'super_manager3@example.com'),
  (17, 'Super Manager 4', 'super4_password', 38, '101 Admin St', 'super4@example.com', 'super_manager4@example.com'),
  (22, 'Super Manager 5', 'super5_password', 42, '222 Admin St', 'super5@example.com', 'super_manager5@example.com');

-- Insert data into "Employee_Orphan_Manager" table
INSERT INTO "Employee_Orphan_Manager" ("ID", "Employee Name", "password", "Age", "Address", "contact", "Email", "Orphanage_ID")
VALUES
  (3, 'Employee Manager', 'employee_password', 30, '456 Employee St', 'employee@example.com', 'employee_manager@example.com', 1),
  (8, 'Employee Manager 2', 'employee2_password', 28, '789 Employee St', 'employee2@example.com', 'employee_manager2@example.com', 2),
  (13, 'Employee Manager 3', 'employee3_password', 32, '101 Employee St', 'employee3@example.com', 'employee_manager3@example.com', 3),
  (18, 'Employee Manager 4', 'employee4_password', 29, '222 Employee St', 'employee4@example.com', 'employee_manager4@example.com', 4),
  (23, 'Employee Manager 5', 'employee5_password', 35, '333 Employee St', 'employee5@example.com', 'employee_manager5@example.com', 5);

-- Insert data into "User" table
INSERT INTO "User" ("ID", "Name", "password", "Age", "Address", "contact", "Email")
VALUES
  (4, 'Regular User', 'user_password', 25, '789 User St', 'user@example.com', 'regular_user@example.com'),
  (9, 'Regular User 2', 'user2_password', 27, '101 User St', 'user2@example.com', 'regular_user2@example.com'),
  (14, 'Regular User 3', 'user3_password', 23, '222 User St', 'user3@example.com', 'regular_user3@example.com'),
  (19, 'Regular User 4', 'user4_password', 26, '333 User St', 'user4@example.com', 'regular_user4@example.com'),
  (24, 'Regular User 5', 'user5_password', 24, '444 User St', 'user5@example.com', 'regular_user5@example.com');

-- Insert data into "Child" table
INSERT INTO "Child" ("Orphanage_ID", "Child_Name", "Age", "Gender", "Fostered")
VALUES
  (1, 'Child 1', 5, 'Male', FALSE),
  (1, 'Child 2', 6, 'Female', FALSE),
  (2, 'Child 3', 4, 'Male', FALSE),
  (3, 'Child 4', 7, 'Female', FALSE),
  (4, 'Child 5', 8, 'Male', FALSE);

-- Insert data into "Worker" table
INSERT INTO "Worker" ("Age", "Address", "Email", "Orphanage_ID")
VALUES
  (30, 'Worker 1 Address', 'worker1@example.com', 1),
  (35, 'Worker 2 Address', 'worker2@example.com', 2),
  (28, 'Worker 3 Address', 'worker3@example.com', 3),
  (32, 'Worker 4 Address', 'worker4@example.com', 4),
  (25, 'Worker 5 Address', 'worker5@example.com', 5);

-- Insert data into "Document" table
INSERT INTO "Document" ("Document_name", "Created_at", "Created_by")
VALUES
  ('Document 1', '2023-01-15 10:30:00', 'User 1'),
  ('Document 2', '2023-02-20 14:45:00', 'User 2'),
  ('Document 3', '2023-03-10 09:15:00', 'User 3'),
  ('Document 4', '2023-04-05 16:00:00', 'User 4'),
  ('Document 5', '2023-05-12 11:20:00', 'User 5');

-- Insert data into "Funding" table
INSERT INTO "Funding" ("Orphan_ID", "Document_ID", "Amount")
VALUES
  (1, 1, 500.00),
  (2, 2, 750.00),
  (3, 3, 600.00),
  (4, 4, 900.00),
  (5, 5, 800.00);

-- Insert data into "Inquiry" table
INSERT INTO "Inquiry" ("ID", "Child_ID", "Inquiry_Title", "Inquiry_Description", "Proofs")
VALUES
  (4, 1, 'Inquiry 1', 'Description 1', E'\\x012345'),
  (4, 2, 'Inquiry 2', 'Description 2', E'\\x6789AB'),
  (9, 3, 'Inquiry 3', 'Description 3', E'\\xCDEF01'),
  (14, 4, 'Inquiry 4', 'Description 4', E'\\x234567'),
  (19, 5, 'Inquiry 5', 'Description 5', E'\\x89ABCD');

-- Insert data into "Foster_Parent" table
INSERT INTO "Foster_Parent" ("Foster_Parnet_Name", "Age", "Gender", "Address", "Contact_Number", "Income_Level")
VALUES
  ('Foster Parent 1', 40, 'Male', '123 Foster St', '123-456-7890', 50000.00),
  ('Foster Parent 2', 35, 'Female', '456 Foster St', '987-654-3210', 60000.00),
  ('Foster Parent 3', 45, 'Male', '789 Foster St', '111-222-3333', 55000.00),
  ('Foster Parent 4', 38, 'Female', '101 Foster St', '444-555-6666', 58000.00),
  ('Foster Parent 5', 42, 'Male', '222 Foster St', '777-888-9999', 62000.00);

-- Insert data into "Adoption" table
INSERT INTO "Adoption" ("Child_ID", "Foster_Parent_ID", "Fostered_Date")
VALUES
  (1, 1, '2023-01-15'),
  (2, 2, '2023-02-20'),
  (3, 3, '2023-03-10'),
  (4, 4, '2023-04-05'),
  (5, 5, '2023-05-12');

-- Insert data into "Case" table
INSERT INTO "Case" ("Child_ID", "Case_Title", "Case_Description", "Document_ID")
VALUES
  (1, 'Case 1', 'Case Description 1', 1),
  (2, 'Case 2', 'Case Description 2', 2),
  (3, 'Case 3', 'Case Description 3', 3),
  (4, 'Case 4', 'Case Description 4', 4),
  (5, 'Case 5', 'Case Description 5', 5);
