USE Assignment;

CREATE TABLE Employee (
	EmpId varchar(10) primary key not null,
	Ename varchar(40) not null,
	Salary numeric not null,
	ExperienceInYears numeric, 
)

INSERT INTO Employee VALUES ('101', 'Emp1', 10000, 2);
INSERT INTO Employee VALUES ('102', 'Emp2', 20000, 4);
INSERT INTO Employee VALUES ('103', 'Emp3', 30000, 1);
INSERT INTO Employee VALUES ('104', 'Emp4', 40000, 7);
INSERT INTO Employee VALUES ('105', 'Emp5', 50000, 2);
INSERT INTO Employee VALUES ('106', 'Emp6', 60000, 8);
INSERT INTO Employee VALUES ('107', 'Emp7', 70000, 6);
INSERT INTO Employee VALUES ('108', 'Emp8', 80000, 3);
INSERT INTO Employee VALUES ('109', 'Emp9', 90000, 5);
INSERT INTO Employee VALUES ('110', 'Emp10',100000, 10);

ALTER TABLE Employee ADD Grade varchar(1) 

SELECT * FROM Employee


UPDATE Employee 
	SET Grade = CASE 
		WHEN Salary >= 1 AND Salary <= 20000     THEN 'A'
		WHEN Salary > 20000 AND Salary <= 40000  THEN 'B'
		WHEN Salary > 40000 AND Salary <= 50000  THEN 'C'
		WHEN Salary > 50000 AND Salary <= 100000 THEN 'D'
	END;

UPDATE Employee
	SET Salary = CASE
		WHEN Grade = 'A' THEN Salary + (0.12 * Salary)
		WHEN Grade = 'B' THEN Salary + (0.10 * Salary)
		WHEN Grade = 'C' THEN Salary + (0.05 * Salary)
		WHEN Grade = 'D' THEN Salary 
	END;

DELETE FROM Employee WHERE Grade = 'D' AND Salary < 2000;

SELECT * FROM Employee WHERE Salary = (SELECT MIN(Salary) FROM (SELECT TOP(2) Salary FROM Employee ORDER BY Salary DESC ) T);

CREATE TABLE SalesDetails (
	SalesOrderId varchar(10) primary key not null,
	UnitPrice numeric,
	OrderQty numeric,
	Area varchar(5),
	CONSTRAINT chk_Area CHECK (Area IN ('South', 'North', 'West', 'East'))
)

INSERT INTO SalesDetails VALUES ('001', 10, 5,  'North');
INSERT INTO SalesDetails VALUES ('002', 20, 10, 'North');
INSERT INTO SalesDetails VALUES ('003', 15, 50, 'South');
INSERT INTO SalesDetails VALUES ('004', 40, 1,  'South');
INSERT INTO SalesDetails VALUES ('005', 5,  8,  'East');
INSERT INTO SalesDetails VALUES ('006', 50, 6,  'East');
INSERT INTO SalesDetails VALUES ('007', 30, 70, 'West');
INSERT INTO SalesDetails VALUES ('008', 10, 30, 'West');

SELECT * FROM SalesDetails;

SELECT Area, SUM(UnitPrice * OrderQty) AS TotalSales FROM SalesDetails GROUP BY Area;

SELECT TOP(1) Area FROM (SELECT Area, SUM(UnitPrice * OrderQty) AS TotalSales FROM SalesDetails GROUP BY Area) AS T;