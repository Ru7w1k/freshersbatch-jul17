		use test;

db.createCollection("Emp");
db.createCollection("Dept");

db.Emp.insert({empno: NumberInt(7369), ename: "SMITH" ,		job: "CLERK", mgr: NumberInt(7902), hiredate: "2000-12-17", sal: NumberInt(800), comm : NumberInt(0),deptno : NumberInt(20), dname : "RESEARCH", loc : "DALLAS"});
db.Emp.insert({empno: NumberInt(7499), ename: "ALLEN" ,		job: "SALESMAN", mgr: NumberInt(7698), hiredate: "2001-02-20", sal: NumberInt(1600), comm : NumberInt(300),deptno : NumberInt(30), dname : "SALES", loc : "CHICAGO"});
db.Emp.insert({empno: NumberInt(7521), ename: "WARD" ,		job: "SALESMAN", mgr: NumberInt(7698), hiredate: "2001-02-22", sal: NumberInt(1250), comm : NumberInt(500),deptno : NumberInt(30), dname : "SALES", loc : "CHICAGO"});
db.Emp.insert({empno: NumberInt(7566), ename: "JONES" ,		job: "MANAGER", mgr: NumberInt(7839), hiredate: "2001-04-02", sal: NumberInt(2975), comm : NumberInt(0),deptno : NumberInt(20), dname : "RESEARCH", loc : "DALLAS"});
db.Emp.insert({empno: NumberInt(7654), ename: "MARTIN" ,	job: "SALESMAN", mgr: NumberInt(7698), hiredate: "2001-09-28", sal: NumberInt(1250), comm : NumberInt(1400),deptno : NumberInt(30), dname : "SALES", loc : "CHICAGO"});
db.Emp.insert({empno: NumberInt(7698), ename: "BLAKE" ,		job: "MANAGER", mgr: NumberInt(7839), hiredate: "2001-05-01", sal: NumberInt(2850), comm : NumberInt(0),deptno : NumberInt(30), dname : "SALES", loc : "CHICAGO"});
db.Emp.insert({empno: NumberInt(7782), ename: "CLARK" ,		job: "MANAGER", mgr: NumberInt(7839), hiredate: "2001-06-09", sal: NumberInt(2450), comm : NumberInt(0),deptno : NumberInt(10), dname : "ACCOUNTING", loc : "NEW YORK"});
db.Emp.insert({empno: NumberInt(7788), ename: "SCOTT" ,		job: "ANALYST", mgr: NumberInt(7566), hiredate: "2007-04-19", sal: NumberInt(3000), comm : NumberInt(0),deptno : NumberInt(20), dname : "RESEARCH", loc : "DALLAS"});
db.Emp.insert({empno: NumberInt(7839), ename: "KING" ,		job: "PRESIDENT", mgr:null , hiredate: "2001-11-17", sal: NumberInt(5000), comm : NumberInt(0),deptno : NumberInt(10), dname : "ACCOUNTING", loc : "NEW YORK"});
db.Emp.insert({empno: NumberInt(7844), ename: "TURNER" ,	job: "SALESMAN", mgr: NumberInt(7698), hiredate: "2001-09-08", sal: NumberInt(1500), comm : NumberInt(0),deptno : NumberInt(30), dname : "SALES", loc : "CHICAGO"});
db.Emp.insert({empno: NumberInt(7876), ename: "ADAMS" ,		job: "CLERK", mgr: NumberInt(7788), hiredate: "2007-05-23", sal: NumberInt(1100), comm : NumberInt(0),deptno : NumberInt(20), dname : "RESEARCH", loc : "DALLAS"});
db.Emp.insert({empno: NumberInt(7900), ename: "JAMES" ,		job: "CLERK", mgr: NumberInt(7698), hiredate: "2001-12-03", sal: NumberInt(950), comm : NumberInt(0),deptno : NumberInt(30), dname : "SALES", loc : "CHICAGO"});
db.Emp.insert({empno: NumberInt(7902), ename: "FORD" ,		job: "ANALYST", mgr: NumberInt(7566), hiredate: "2001-12-03", sal: NumberInt(3000), comm : NumberInt(0),deptno : NumberInt(20), dname : "RESEARCH", loc : "DALLAS"});
db.Emp.insert({empno: NumberInt(7934), ename: "MILLER" ,	job: "CLERK", mgr: NumberInt(7782), hiredate: "2003-01-23", sal: NumberInt(1300), comm : NumberInt(0),deptno : NumberInt(10), dname : "ACCOUNTING", loc : "NEW YORK"});

// db.Dept.insert({deptno: NumberInt(10), dname : "ACCOUNTING", loc : "NEW YORK"});
// db.Dept.insert({deptno: NumberInt(20), dname : "RESEARCH", loc : "DALLAS"});
// db.Dept.insert({deptno: NumberInt(30), dname : "SALES", loc : "CHICAGO"});
// db.Dept.insert({deptno: NumberInt(40), dname : "OPERATIONS", loc : "BOSTON"});

-- q1
db.Emp.find().pretty();

-- q2
db.Dept.find().pretty();

-- q3
db.Emp.find({"deptno" : 30});

-- q4
db.Emp.find({"job" : "CLERK"}, {"ename":1, "empno":1, "deptno": 1});

-- q5
db.Emp.find({"job" : "CLERK"}, {"ename":1, "empno":1, "deptno": 1})

-- q6
db.Emp.find({$where: "this.comm > this.sal"});

-- q7
db.Emp.find({$where: "this.comm > (this.sal * 0.6)"});

// q8
db.Emp.find({$where: "this.comm > (this.sal * 0.5)"});

// q9
db.Emp.find({$and : [{"deptno" : 20}, {"sal" : {$gt : 2000}}]}, {"ename":1, "job":1, "sal":1});

// q10
db.Emp.find({$and : [{"deptno" : 30}, {"sal" : {$gte : 1500}}]});

// q11
db.Emp.find({$or : [{"job": "PRESIDENT"}, {"job": "MANAGER"}]});

// q12
db.Emp.find({$and: [{"job": "MANAGER"}, {"deptno" : {$ne : 30}}]});

// q13
db.Emp.find({$and: [{$or: [{"job": "MANAGER"},{"job": "CLERK"}]}, {"deptno": 10}]});

// q14
db.Emp.find({$or: [{"job": "MANAGER"}, {$and :[{"job": "CLERK"}, {"deptno": 10}]}]});

// q15
db.Emp.find({$or: [{$and :[{"job": "MANAGER"}, {"deptno": 10}]}, {$and :[{"job": "CLERK"}, {"deptno": 20}]}]});

//  q16
db.Emp.find({$and: [{"job": {$ne : ["MANAGER","CLERK"]}},{"sal" : {$gt : 2000}}]});

// q17
db.Emp.find({"sal" : {$gte: 1200, $lte: 1400}});

// q18
db.Emp.find({"job" : { $in : ["CLERK", "ANALYST", "SALESMAN"]}});

// q19
db.Emp.find({"job" : { $nin : ["CLERK", "ANALYST", "SALESMAN"]}});

// q20
db.Emp.find({"comm" : null});

// db.Emp.update({"empno" : 7844}, {$set: {"comm" : 0}});
// db.Emp.update({"comm" : 0}, {$set: {"comm" : null}}, {multi: true});

// q21
db.Emp.find({"comm" : 0});

// q22
db.Emp.find({"comm" : {$gt : 0}}, {"job":1});

// q23
db.Emp.find({$or : [{"comm" : {$lt : 100}}, {"comm" : null}]});

// q24
// db.Emp.find({$where : "this.comm == 0 || this.comm == null"});

// q25
// 

// q26
db.Emp.find({ "ename": /^M/});

// q27
db.Emp.find({ "ename": /.*M/});
