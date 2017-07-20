DROP TABLE EMP;
DROP TABLE DEPT;

CREATE TABLE DEPT
(
	DEPTNO NUMERIC(2) CONSTRAINT DEPTNO_DEPT_PK PRIMARY KEY,
	DNAME VARCHAR(14),
	LOC VARCHAR(13)
);

INSERT INTO DEPT VALUES (10,'ACCOUNTING','NEW YORK');
INSERT INTO DEPT VALUES (20,'RESEARCH','DALLAS');
INSERT INTO DEPT VALUES (30,'SALES','CHICAGO');
INSERT INTO DEPT VALUES (40,'OPERATIONS','BOSTON');

CREATE TABLE EMP
(
	 EMPNO NUMERIC(4) CONSTRAINT EMPNO_EMP_PK PRIMARY KEY,
	 ENAME VARCHAR(10),
	 JOB   VARCHAR(9),
	 MGR   NUMERIC(4), 
	 HIREDATE DATE,
	 SAL NUMERIC(7,2),        
	 COMM NUMERIC(7,2),        
	 DEPTNO NUMERIC(2) CONSTRAINT DEPTNO_DEPT_FK REFERENCES DEPT(DEPTNO)      
);

INSERT INTO EMP VALUES (7369,'SMITH','CLERK',7902,'17-DEC-00',800,NULL,20);
INSERT INTO EMP VALUES (7499,'ALLEN','SALESMAN',7698,'20-FEB-01',1600,300,30);
INSERT INTO EMP VALUES (7521,'WARD','SALESMAN',7698,'22-FEB-01',1250,500,30);
INSERT INTO EMP VALUES (7566,'JONES','MANAGER',7839,'02-APR-01',2975,NULL,20);
INSERT INTO EMP VALUES (7654,'MARTIN','SALESMAN',7698,'28-SEP-01',1250,1400,30);
INSERT INTO EMP VALUES (7698,'BLAKE','MANAGER',7839,'01-MAY-01',2850,NULL,30);
INSERT INTO EMP VALUES (7782,'CLARK','MANAGER',7839,'09-JUN-01',2450,NULL,10);
INSERT INTO EMP VALUES (7788,'SCOTT','ANALYST',7566,'19-APR-07',3000,NULL,20);
INSERT INTO EMP VALUES (7839,'KING','PRESIDENT',NULL,'17-NOV-01',5000,NULL,10);
INSERT INTO EMP VALUES (7844,'TURNER','SALESMAN',7698,'08-SEP-01',1500,0,30);
INSERT INTO EMP VALUES (7876,'ADAMS','CLERK',7788,'23-MAY-07',1100,NULL,20);
INSERT INTO EMP VALUES (7900,'JAMES','CLERK',7698,'03-DEC-01','950',NULL,30);
INSERT INTO EMP VALUES (7902,'FORD','ANALYST',7566,'03-DEC-01',3000,NULL,20);
INSERT INTO EMP VALUES (7934,'MILLER','CLERK',7782,'23-JAN-02',1300,NULL,10);

commit; 

-- FIRST SECTION --

SELECT * FROM EMP;
SELECT * FROM DEPT;

-- Q1
SELECT DNAME FROM DEPT;

-- Q2
SELECT ENAME FROM EMP;

-- Q3
SELECT * FROM EMP WHERE DEPTNO = 30;

-- Q4
SELECT ENAME, EMPNO, DEPTNO FROM EMP WHERE JOB = 'CLERK';

-- Q5
SELECT DEPTNO, ENAME FROM EMP WHERE DEPTNO >= 20;

-- Q6
SELECT * FROM EMP WHERE COMM > SAL;

-- Q7
SELECT * FROM EMP WHERE COMM > (SAL * 60/100);

-- Q8
SELECT * FROM EMP WHERE COMM > (SAL * 50/100);

-- Q9
SELECT ENAME, JOB, SAL, COMM FROM EMP WHERE DEPTNO = 20 AND SAL+NVL(COMM, 0) > 2000;

-- Q10
SELECT * FROM EMP WHERE JOB = 'SALESMAN' AND DEPTNO = 30 AND SAL >= 1500;

-- Q11
SELECT * FROM EMP WHERE JOB = 'PRESIDENT' OR JOB = 'MANAGER'; 

-- Q12
SELECT * FROM EMP WHERE JOB = 'MANAGER' AND DEPTNO != 30;

-- Q13
SELECT * FROM EMP WHERE (JOB = 'MANAGER' OR JOB = 'CLERK') AND DEPTNO = 10;

-- Q14
SELECT * FROM EMP WHERE (JOB = 'MANAGER') OR (JOB = 'CLERK' AND DEPTNO = 10);

-- Q15
SELECT * FROM EMP WHERE (JOB = 'MANAGER' AND DEPTNO = 10) OR (JOB = 'CLERK' AND DEPTNO = 20);

-- Q16
SELECT * FROM EMP WHERE (JOB != 'CLERK' AND JOB != 'MANAGER') AND SAL >= 2000;

-- Q17
SELECT * FROM EMP WHERE SAL BETWEEN 1200 AND 1400;

-- Q18
SELECT * FROM EMP WHERE JOB = 'CLERK' OR JOB = 'ANALYST' OR JOB = 'SALESMAN';

-- Q19
SELECT * FROM EMP WHERE NOT(JOB = 'CLERK' OR JOB = 'ANALYST' OR JOB = 'SALESMAN');

-- Q20
SELECT * FROM EMP WHERE COMM IS NULL;

-- Q21
SELECT * FROM EMP WHERE COMM = 0;

-- Q22
SELECT DISTINCT JOB FROM EMP WHERE COMM > 0;

-- Q23
SELECT * FROM EMP WHERE COMM < 100 OR COMM IS NULL;

-- Q24
SELECT ENAME, SAL + NVL(COMM, 250) AS NET_EARNING FROM EMP;

-- Q25
SELECT * FROM (SELECT ENAME, SAL + NVL(COMM, 250) AS NET_EARNING FROM EMP) WHERE NET_EARNING > 2000;

-- Q26
SELECT ENAME FROM EMP WHERE ENAME LIKE 'M%';

-- Q27
SELECT ENAME FROM EMP WHERE ENAME LIKE '%M';

-- Q28
SELECT ENAME FROM EMP WHERE ENAME LIKE '%M%';

-- Q29
SELECT ENAME FROM EMP WHERE ENAME LIKE '____N';

-- Q30
SELECT ENAME FROM EMP WHERE ENAME LIKE '__R%';

-- SECOND SECTION 

-- Q31
SELECT * FROM EMP WHERE TO_CHAR(HIREDATE, 'MM') = '02';

-- Q32
SELECT * FROM EMP WHERE TO_CHAR(HIREDATE, 'DD') = TO_CHAR(LAST_DAY(HIREDATE));

-- Q33
SELECT * FROM EMP WHERE HIREDATE < (SELECT ADD_MONTHS(SYSDATE, 144) FROM DUAL);


-- Q34
SELECT * FROM EMP WHERE TO_CHAR(HIREDATE, 'YYYY') = '2007' AND JOB = 'MANAGER';

-- Q35
SELECT '(' || ENAME||','||JOB || ')' FROM EMP;

-- Q36
SELECT INITCAP(ENAME) AS NAME FROM EMP;

-- Q37
SELECT LPAD(ENAME, 15) AS NAME FROM AEMP;

-- Q38
SELECT LPAD(ENAME, 15, '-') AS NAME FROM EMP;

-- Q39
SELECT ENAME, LENGTH(ENAME) AS LEN FROM EMP;

-- Q40
SELECT RPAD(LPAD(ENAME,LENGTH(ENAME) + (20-(LENGTH(ENAME)))/2),20) AS NAME FROM EMP;

-- Q41
SELECT ENAME FROM EMP WHERE ENAME NOT LIKE 'A%';

-- Q42
SELECT ENAME FROM EMP WHERE ENAME NOT LIKE '%R';

-- Q43
SELECT SUBSTR(ENAME, 1, 3) FROM EMP;

-- Q44
SELECT SUBSTR(ENAME, LENGTH(ENAME) - 2, LENGTH(ENAME)) FROM EMP;

-- Q45
SELECT REPLACE(ENAME, 'A', 'E') FROM EMP;

-- Q46
SELECT ENAME, INSTR(ENAME, 'AR') AS AR_AT FROM EMP;

-- Q47
SELECT ENAME, FLOOR((SAL + 999) / 1000) * 1000 FROM EMP; 

-- Q48
SELECT ENAME, ROUND((SAL/360),2) AS DAILY_SAL FROM EMP;

-- Q49
SELECT ENAME, CASE WHEN (SAL * 20 / 100) < 500 THEN (SAL * 20 / 100)
                   WHEN (SAL * 20 / 100) > 500 THEN 500 END AS BONUS FROM EMP;

-- Q50
SELECT ENAME, CASE WHEN (SAL * 20 / 100) < 200 THEN (SAL * 20 / 100)
                   WHEN (SAL * 20 / 100) > 200 THEN 200 END AS BONUS FROM EMP;
                   
-- Q51
SELECT ENAME, ROUND(SYSDATE - HIREDATE, 0) AS DAYS FROM EMP;

-- Q52
SELECT ENAME, MONTHS_BETWEEN(SYSDATE,HIREDATE) AS MONTHS FROM EMP;

-- Q53
SELECT TRUNC(MONTHS_BETWEEN(SYSDATE,HIREDATE)/12) || ' years '
  || TRUNC(mod(MONTHS_BETWEEN(SYSDATE,HIREDATE), 12)) || ' months '
  || ROUND(30*(MONTHS_BETWEEN(SYSDATE,HIREDATE) - TRUNC(MONTHS_BETWEEN(SYSDATE,HIREDATE))), 0) || ' days' AS WORKING_DAYS
FROM EMP;

-- Q54
SELECT INITCAP(ENAME) || ' joined on the ' ||
  INITCAP(TO_CHAR(HIREDATE,'DDSP')) || ' of ' ||
  INITCAP(TO_CHAR(HIREDATE,'MONTH')) || ' of the year ' ||
  INITCAP(TO_CHAR(HIREDATE,'YEAR')) AS INFO
FROM EMP;

-- THIRD SECTION

-- Q55
SELECT * FROM EMP ORDER BY ENAME;

-- Q56
SELECT ENAME, TRUNC(MONTHS_BETWEEN(SYSDATE,HIREDATE)/12) || ' years '
  || TRUNC(mod(MONTHS_BETWEEN(SYSDATE,HIREDATE), 12)) || ' months '
  || ROUND(30*(MONTHS_BETWEEN(SYSDATE,HIREDATE) - TRUNC(MONTHS_BETWEEN(SYSDATE,HIREDATE))), 0) || ' days' AS WORKING_DAYS
FROM EMP ORDER BY WORKING_DAYS DESC;

-- Q57
SELECT ENAME, JOB, SAL FROM EMP ORDER BY JOB, SAL;

-- Q58
SELECT ENAME, JOB, SAL FROM EMP ORDER BY JOB, SAL DESC;

-- Q59
SELECT ENAME, JOB, SAL FROM EMP ORDER BY JOB DESC, SAL DESC;

-- Q60
SELECT ENAME, TO_CHAR(HIREDATE, 'MM') AS MNTH, TO_CHAR(HIREDATE, 'YYYY') FROM EMP ORDER BY MNTH;

-- Q61
SELECT ENAME, TO_CHAR(HIREDATE, 'MM') AS MNTH, TO_CHAR(HIREDATE, 'YYYY') AS YR FROM EMP ORDER BY MNTH, YR;

-- COMPLEX QUERIES --

-- Q1
SELECT ENAME, SAL, DNAME
FROM EMP JOIN DEPT
ON EMP.DEPTNO = DEPT.DEPTNO
WHERE EMP.SAL = (
  SELECT MIN(SAL)
  FROM EMP
);

-- Q2
SELECT EMP.DEPTNO, MIN(EMP.SAL)
FROM EMP JOIN DEPT
ON EMP.DEPTNO = DEPT.DEPTNO
GROUP BY EMP.DEPTNO
ORDER BY EMP.DEPTNO;

-- Q3
SELECT EMP.EMPNO, EMP.ENAME, EMP.JOB, EMP.SAL, DEPT.DEPTNO, DEPT.DNAME
FROM EMP JOIN DEPT
ON EMP.DEPTNO = DEPT.DEPTNO
WHERE EMP.JOB = 'CLERK'
ORDER BY SAL;

-- Q4
SELECT EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, DEPTNO
FROM EMP 
WHERE EMP.DEPTNO = (
  SELECT EMP.DEPTNO 
  FROM EMP JOIN DEPT 
  ON EMP.DEPTNO = DEPT.DEPTNO
  WHERE EMP.ENAME = 'FORD'
);

-- Q5
SELECT EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, DEPTNO
FROM EMP 
WHERE EMP.DEPTNO = (
  SELECT EMP.DEPTNO 
  FROM EMP JOIN DEPT 
  ON EMP.DEPTNO = DEPT.DEPTNO
  WHERE EMP.ENAME = 'WARD'
  )
  AND EMP.SAL > (
    SELECT SAL 
    FROM EMP
    WHERE ENAME = 'MARTIN'
);

-- Q6
SELECT EMP.EMPNO, EMP.ENAME, EMP.DEPTNO, DEPT.DNAME, DEPT.LOC
FROM EMP JOIN DEPT
ON EMP.DEPTNO = DEPT.DEPTNO;

-- Q7
SELECT EMP.DEPTNO, DEPT.DNAME, EMP.ENAME
FROM EMP JOIN DEPT
ON EMP.DEPTNO = DEPT.DEPTNO
ORDER BY EMP.DEPTNO;

-- Q8
SELECT EMP.ENAME, EMP.DEPTNO, DEPT.DNAME, DEPT.LOC
FROM EMP JOIN DEPT
ON EMP.DEPTNO = DEPT.DEPTNO
WHERE DEPT.LOC = 'NEW YORK';

-- Q9
SELECT EMP.ENAME, EMP.SAL, DEPT.DNAME
FROM EMP JOIN DEPT
ON EMP.DEPTNO = DEPT.DEPTNO
WHERE EMP.SAL IN (
  SELECT MIN(SAL)
  FROM EMP
  GROUP BY DEPTNO
)
ORDER BY EMP.SAL;

-- Q10
SELECT EMPNO, JOB, MGR, SAL, DNAME
FROM EMP JOIN DEPT
ON EMP.DEPTNO = DEPT.DEPTNO
WHERE EMP.SAL IN (
  SELECT MAX(SAL)
  FROM EMP
  GROUP BY DEPTNO
)
ORDER BY EMPNO;

-- Q11
SELECT DISTINCT B.ENAME AS BOSS, COUNT(*) AS SUBORDINATES
FROM EMP E JOIN EMP B
ON E.MGR = B.EMPNO
GROUP BY B.ENAME;

-- Q12
SELECT E.ENAME, E.JOB, E.SAL, B.ENAME AS MGR_NAME, B.JOB AS MGR_JOB, B.SAL AS MGR_SAL
FROM EMP E JOIN EMP B
ON E.MGR = B.EMPNO;

-- Q13
DROP TABLE ORDER_ITEM;
DROP TABLE ORDER_TABLE;
DROP TABLE PRODUCT;

CREATE TABLE ORDER_TABLE (
  ID NUMERIC(2) CONSTRAINT ID_ORDER_PK PRIMARY KEY,
  ORDERDATE DATE,
  ORDERNUMBER NUMERIC(4)
);

CREATE TABLE ORDER_ITEM (
  ID NUMERIC(2) CONSTRAINT ID_ORDER_ITEM_PK PRIMARY KEY,
  ORDERID NUMERIC(4) CONSTRAINT ORDERID_ORDER_ITEM_FK REFERENCES ORDER_TABLE(ID),
  PRODUCTID NUMERIC(4) CONSTRAINT PRODUCTID_ORDER_ITEM_FK REFERENCES PRODUCT(ID),
  UNITPRICE NUMERIC(4),
  QUANTITY NUMERIC(4)
);

CREATE TABLE PRODUCT (
  ID NUMERIC(2) CONSTRAINT ID_PRODUCT_PK PRIMARY KEY,
  PRODUCTNAME VARCHAR(30)
);

INSERT INTO ORDER_TABLE VALUES (1, '4-7-12', 7369);
INSERT INTO ORDER_TABLE VALUES (2, '10-2-11', 7900);
INSERT INTO ORDER_TABLE VALUES (3, '23-9-15', 7934);

INSERT INTO ORDER_ITEM VALUES (1, 1, 2,20, 800);
INSERT INTO ORDER_ITEM VALUES (3, 2, 4,30, 950);
INSERT INTO ORDER_ITEM VALUES (5, 3, 6,10, 1300);

INSERT INTO PRODUCT VALUES (2, 'EASY-TRADING');
INSERT INTO PRODUCT VALUES (4, 'BANK-ANYWHERE');
INSERT INTO PRODUCT VALUES (6, 'TRIP-MANAGER');

SELECT OT.ORDERNUMBER, OT.ORDERDATE, PR.PRODUCTNAME, OI.QUANTITY, OI.UNITPRICE
FROM ORDER_TABLE OT JOIN ORDER_ITEM OI
ON OT.ID = OI.ORDERID
JOIN PRODUCT PR
ON PR.ID = OI.PRODUCTID
ORDER BY OT.ID;

-- Q14
SELECT MIN(SAL)
FROM EMP
WHERE SAL > (SELECT MIN(SAL) FROM EMP);

-- Q15
SELECT SAL
FROM (SELECT SAL FROM EMP ORDER BY SAL DESC)
WHERE ROWNUM < 4;

-- Q16
DROP TABLE EMP2;

CREATE TABLE EMP2
(
	 EMPNO NUMERIC(4) CONSTRAINT EMPNO_EMP2_PK PRIMARY KEY,
	 ENAME VARCHAR(10),
	 JOB   VARCHAR(9),
	 MGR   NUMERIC(4), 
	 HIREDATE DATE,
	 SAL NUMERIC(7,2),        
	 COMM NUMERIC(7,2),        
	 DEPTNO NUMERIC(2) CONSTRAINT EMP2_DEPTNO_DEPT_FK REFERENCES DEPT(DEPTNO)      
);

INSERT INTO EMP2 VALUES (7369,'SMITH','CLERK',7902,'17-DEC-00',800,NULL,20);
INSERT INTO EMP2 VALUES (123,'ALLEN','SALESMAN',7698,'20-FEB-01',1600,300,30);
INSERT INTO EMP2 VALUES (7521,'WARD','SALESMAN',7698,'22-FEB-01',1250,500,30);
INSERT INTO EMP2 VALUES (7566,'JONES','MANAGER',7839,'02-APR-01',2975,NULL,20);
INSERT INTO EMP2 VALUES (7654,'MARTIN','SALESMAN',7698,'28-SEP-01',1250,1400,30);
INSERT INTO EMP2 VALUES (1233,'BLAKE','MANAGER',7839,'01-MAY-01',2850,NULL,30);
INSERT INTO EMP2 VALUES (7782,'CLARK','MANAGER',7839,'09-JUN-01',2450,NULL,10);
INSERT INTO EMP2 VALUES (52,'SCOTT','ANALYST',7566,'19-APR-07',3000,NULL,20);
INSERT INTO EMP2 VALUES (14,'KING','PRESIDENT',NULL,'17-NOV-01',5000,NULL,10);
INSERT INTO EMP2 VALUES (7844,'TURNER','SALESMAN',7698,'08-SEP-01',1500,0,30);
INSERT INTO EMP2 VALUES (7876,'ADAMS','CLERK',7788,'23-MAY-07',1100,NULL,20);
INSERT INTO EMP2 VALUES (235,'JAMES','CLERK',7698,'03-DEC-01','950',NULL,30);
INSERT INTO EMP2 VALUES (7902,'FORD','ANALYST',7566,'03-DEC-01',3000,NULL,20);
INSERT INTO EMP2 VALUES (7934,'MILLER','CLERK',7782,'23-JAN-02',1300,NULL,10);

SELECT * FROM EMP
INTERSECT
SELECT * FROM EMP2;

-- Q17
SELECT DEPTNO, SUM(SAL)
FROM EMP
GROUP BY DEPTNO
HAVING COUNT(*) > 2;