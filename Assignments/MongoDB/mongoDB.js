
db.createCollection("Emp");
db.createCollection("Dept");


db.Emp.remove();

db.Emp.insert({empno: NumberInt(7369), ename: "SMITH" ,		job: "CLERK", mgr: NumberInt(7902), hiredate: ISODate("2000-12-17"), sal: NumberInt(800), comm : null,deptno : NumberInt(20), dname : "RESEARCH", loc : "DALLAS"});
db.Emp.insert({empno: NumberInt(7499), ename: "ALLEN" ,		job: "SALESMAN", mgr: NumberInt(7698), hiredate: ISODate("2001-02-20"), sal: NumberInt(1600), comm : NumberInt(300),deptno : NumberInt(30), dname : "SALES", loc : "CHICAGO"});
db.Emp.insert({empno: NumberInt(7521), ename: "WARD" ,		job: "SALESMAN", mgr: NumberInt(7698), hiredate: ISODate("2001-02-22"), sal: NumberInt(1250), comm : NumberInt(500),deptno : NumberInt(30), dname : "SALES", loc : "CHICAGO"});
db.Emp.insert({empno: NumberInt(7566), ename: "JONES" ,		job: "MANAGER", mgr: NumberInt(7839), hiredate: ISODate("2001-04-02"), sal: NumberInt(2975), comm : null,deptno : NumberInt(20), dname : "RESEARCH", loc : "DALLAS"});
db.Emp.insert({empno: NumberInt(7654), ename: "MARTIN" ,	job: "SALESMAN", mgr: NumberInt(7698), hiredate: ISODate("2001-09-28"), sal: NumberInt(1250), comm : NumberInt(1400),deptno : NumberInt(30), dname : "SALES", loc : "CHICAGO"});
db.Emp.insert({empno: NumberInt(7698), ename: "BLAKE" ,		job: "MANAGER", mgr: NumberInt(7839), hiredate: ISODate("2001-05-01"), sal: NumberInt(2850), comm : null,deptno : NumberInt(30), dname : "SALES", loc : "CHICAGO"});
db.Emp.insert({empno: NumberInt(7782), ename: "CLARK" ,		job: "MANAGER", mgr: NumberInt(7839), hiredate: ISODate("2001-06-09"), sal: NumberInt(2450), comm : null,deptno : NumberInt(10), dname : "ACCOUNTING", loc : "NEW YORK"});
db.Emp.insert({empno: NumberInt(7788), ename: "SCOTT" ,		job: "ANALYST", mgr: NumberInt(7566), hiredate: ISODate("2007-04-19"), sal: NumberInt(3000), comm : null,deptno : NumberInt(20), dname : "RESEARCH", loc : "DALLAS"});
db.Emp.insert({empno: NumberInt(7839), ename: "KING" ,		job: "PRESIDENT", mgr:null , hiredate: ISODate("2001-11-17"), sal: NumberInt(5000), comm : NumberInt(0),deptno : NumberInt(10), dname : "ACCOUNTING", loc : "NEW YORK"});
db.Emp.insert({empno: NumberInt(7844), ename: "TURNER" ,	job: "SALESMAN", mgr: NumberInt(7698), hiredate: ISODate("2001-09-08"), sal: NumberInt(1500), comm : NumberInt(0),deptno : NumberInt(30), dname : "SALES", loc : "CHICAGO"});
db.Emp.insert({empno: NumberInt(7876), ename: "ADAMS" ,		job: "CLERK", mgr: NumberInt(7788), hiredate: ISODate("2007-05-23"), sal: NumberInt(1100), comm : null,deptno : NumberInt(20), dname : "RESEARCH", loc : "DALLAS"});
db.Emp.insert({empno: NumberInt(7900), ename: "JAMES" ,		job: "CLERK", mgr: NumberInt(7698), hiredate: ISODate("2001-12-03"), sal: NumberInt(950), comm : null,deptno : NumberInt(30), dname : "SALES", loc : "CHICAGO"});
db.Emp.insert({empno: NumberInt(7902), ename: "FORD" ,		job: "ANALYST", mgr: NumberInt(7566), hiredate: ISODate("2001-12-03"), sal: NumberInt(3000), comm : null,deptno : NumberInt(20), dname : "RESEARCH", loc : "DALLAS"});
db.Emp.insert({empno: NumberInt(7934), ename: "MILLER" ,	job: "CLERK", mgr: NumberInt(7782), hiredate: ISODate("2003-01-23"), sal: NumberInt(1300), comm : null,deptno : NumberInt(10), dname : "ACCOUNTING", loc : "NEW YORK"});


db.Emp.find();


// q1
db.Emp.find().pretty();

// q2
db.Emp.distinct("dname");

// q3
db.Emp.find({"deptno" : 30});

// q4
db.Emp.find({"job" : "CLERK"}, {"ename":1, "empno":1, "deptno": 1});

// q5
db.Emp.find({"deptno" : {$gte : 20}}, {"ename":1, "empno":1, "deptno": 1})

// q6
db.Emp.find({$where: "this.comm > this.sal"});

// q7
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

// q21
db.Emp.find({"comm" : 0});

// q22
db.Emp.find({"comm" : {$gt : 0}}, {"job":1});

// q23
db.Emp.find({$or : [{"comm" : {$lt : 100}}, {"comm" : null}]});

// q24
db.Emp.aggregate({
    "$project": {
       "ename":1,
       "mcomm": {$ifNull : ["$comm", 250]}, 
       "netIncome" : {$sum : ["$sal","$mcomm"]}
   }
});

// q25
db.Emp.aggregate(
    {$project: {
       ename:1,
       mcomm: {$ifNull : ["$comm", 250]}, 
       netIncome : {$sum : ["$sal","$mcomm"]}       
   }
   },
   {$match: {netIncome : {$gte : 2000}}}   
);

// q26
db.Emp.find({ "ename": /^M/});

// q27
db.Emp.find({ "ename": /.*M$/});

// q28
db.Emp.find({"ename": /.*M.*/});



// q29

db.Emp.find({"ename": /^[a-zA-Z]{4}N/});



// q30

db.Emp.find({"ename": /^[a-zA-Z]{2}R/});


// q31
db.Emp.aggregate(
    {
        $project : {
            ename : 1,
            month : {$month : "$hiredate"}
            }
    },
    {
        $match: {month : 2}}
);

// q32
db.Emp.aggregate(
    {
        $project : {
            ename : 1,
            day : {$dayOfMonth : "$hiredate"}
            }
    },
    {
        
        }
);

// q33
db.Emp.aggregate(
    {
        $project : {
            ename : 1,
            tenure : {
                $subtract : [
                    {$year : new Date()},
                    {$year : "$hiredate"}]}
            }
    },
    {
        $match : {tenure : {$gte : 12}
        }}
);

// q34
db.Emp.aggregate(
    {
        $project : {
            ename : 1,
            hyear : {$year : "$hiredate"},
            job : 1
            }
    },
    {
        $match : {$and : [{"hyear" : 2007},{"job" : "MANAGER"}]
        }}
);     
        
// q35
getNameJob = function(obj) {return obj.ename + ", " + obj.job};
db.Emp.find().map(getNameJob);

// q36
getCapName = function(doc) {return doc.ename.substr(0,1).toUpperCase() + doc.ename.substr(1,doc.ename.length - 1).toLowerCase()};
db.Emp.find().map(getCapName);

// q37
alignRight = function(doc) {
    var s = "";
    var cnt = 15 - doc.ename.length;
    for (var i = 0 ; i < cnt ; i++) {
        s += " ";
    }
    return s + doc.ename };
db.Emp.find().map(alignRight);

// q38
alignRightD = function(doc) {
    var s = "";
    var cnt = 15 - doc.ename.length;
    for (var i = 0 ; i < cnt ; i++) {
        s += "-";
    }
    return s + doc.ename };
db.Emp.find().map(alignRightD);

// q39
getLength = function(obj) {return obj.ename + " " + obj.ename.length};
db.Emp.find().map(getLength);

// q40
alignCenter = function(doc) {
    var l = "";
    var r = "";
    var cnt = Math.floor((20 - doc.ename.length) / 2);
    for (var i = 0 ; i < cnt ; i++) {
        l += " ";
    }
    var cntd = 20 - (doc.ename.length + cnt);
    for (var j = 0 ; j < cntd ; j++) {
        r += " ";
    }
    return l + doc.ename + r};
db.Emp.find().map(alignCenter);
    
db.Emp.find().forEach(function(doc) {
     var l = "";
    var r = "";
    var cnt = Math.floor((20 - doc.ename.length) / 2);
    for (var i = 0 ; i < cnt ; i++) {
        l += " ";
    }
    var cntd = 20 - (doc.ename.length + cnt);
    for (var j = 0 ; j < cntd ; j++) {
        r += " ";
    }
    print(l + doc.ename + r);
    });

// q41
db.Emp.find({$where : "this.ename.substr(0,1) != 'A'"});

// q42
db.Emp.find({$where : "this.ename.substr(this.ename.length - 1, 1) != 'R'"});

// q43
getFirstThree = function(doc) {return doc.ename.substr(0,3)};
db.Emp.find().map(getFirstThree);

db.Emp.aggregate({
    $project : {
        "ename" : {$substr : ["$ename", 0, 3]}}});

// q44
getLastThree = function(doc) {return doc.ename.substr(doc.ename.length - 3,3)};
db.Emp.find().map(getLastThree);

db.Emp.aggregate({
    $project : {
        "ename" : {$substr : ["$ename", {$subtract : [{ $strLenBytes: "$ename" }, 3]}, 3]}}});
        
// q45
replaceAE = function(doc) { return doc.ename.replace("A", "E")};
db.Emp.find().map(replaceAE);

db.Emp.find().forEach(function(doc){
    print(doc.ename.replace("A","E"))});

// q46
db.Emp.aggregate({
    $project : {
        "ename" : 1,
        "ar at" : {$indexOfBytes: [ "$ename", "AR" ]}}});

// q47
db.Emp.aggregate({
    $project : {
        "ename" : 1,
        "sal"   : 1,
        "asal"  : {$multiply : [{$floor : {$divide : [{$add : ["$sal", 999]}, 1000]}}, 1000]
            }}});

// q48
db.Emp.aggregate({
    $project : {
        "ename" : 1,
        "daily salary" : {$divide : ["$sal", 360]}
        }});        

// q49
db.Emp.aggregate({
    $project : {
        "ename" : 1,
        "bonus" : {$cond : {if : {$gt : [{$multiply : ["$sal", 0.2]}, 500]}, then : 500, else: {$multiply : ["$sal", 0.2]} }}
        }});        

// q50
db.Emp.aggregate({
    $project : {
        "ename" : 1,
        "bonus" : {$cond : {if : {$gt : [{$multiply : ["$sal", 0.2]}, 200]}, then : 200, else: {$multiply : ["$sal", 0.2]} }}
        }}); 

// q51
db.Emp.aggregate({
    $project : {
        "ename" : 1,
        "days worked" : {$floor : {$divide : [{$subtract : [new Date(), "$hiredate"]}, 86400000]}}
        }});        

// q52
db.Emp.aggregate({
    $project : {
        "ename" : 1,
        "months worked" : {$divide : [{$subtract : [new Date(), "$hiredate"]}, 2592000000]}
        }});     

// q53
db.Emp.aggregate({
    $project : {
        "ename" : 1,
        "tenure" : {$concat : [
           {$substr : [{$floor : {$divide : [{$subtract : [new Date(), "$hiredate"]}, 1000*60*60*24*360]}}, 0, -1]},
           " years ",
           {$substr : [{$floor : {$mod : [{$divide : [{$subtract : [new Date(), "$hiredate"]}, 1000*60*60*24*30]}, 12]}}, 0, -1]},
           " months ",
           {$substr : [{$floor : {$mod : [{$divide : [{$subtract : [new Date(), "$hiredate"]}, 1000*60*60*24]}, 30]}}, 0, -1]},
           " days"            
        ]}}});
        
// q54        


// q55
db.Emp.find().sort({"ename" : 1});

// q56
db.Emp.aggregate({
    $project : {
        "ename" : 1,
        "tenure" : {$concat : [
           {$substr : [{$floor : {$divide : [{$subtract : [new Date(), "$hiredate"]}, 1000*60*60*24*360]}}, 0, -1]},
           " years ",
           {$substr : [{$floor : {$mod : [{$divide : [{$subtract : [new Date(), "$hiredate"]}, 1000*60*60*24*30]}, 12]}}, 0, -1]},
           " months ",
           {$substr : [{$floor : {$mod : [{$divide : [{$subtract : [new Date(), "$hiredate"]}, 1000*60*60*24]}, 30]}}, 0, -1]},
           " days"            
        ]}}},
        {
            $sort : {"tenure" : -1}});

// q57
db.Emp.find({},{"ename":1, "job":1, "sal":1}).sort({"job":1, "salary" : 1});


// q58
db.Emp.find().sort({"job":1, "sal" : -1},{"ename":1, "job":1, "sal":1});

// q59
db.Emp.aggregate({
    $project : {
        "ename" : 1,
        "job" : 1,
        "sal" : 1}},
        {
            $sort : {"job" : 1, "sal" : -1}});
            
// q60
db.Emp.aggregate({
    $project : {
        "ename" : 1,
        "month" : {$month : "$hiredate"},
        "year"  : {$year : "$hiredate"} }},
        {
            $sort : {"month" : 1}});            
            
// q61
db.Emp.aggregate({
    $project : {
        "ename" : 1,
        "month" : {$month : "$hiredate"},
        "year"  : {$year : "$hiredate"} }},
        {
            $sort : {"month" : 1, "year" : 1}});            
            
// // // COMPLEX QUERIES // // //
// q1
db.Emp.aggregate({
        $project : {
            "ename" : 1,
            "sal" : 1,
            "dname" : 1}},
        {
           $sort : {"sal" : 1}
        },
        {
           $limit : 1
        }
        );     
  
// q2
db.Emp.aggregate({
    $project : {
        "deptno" : 1,
        "sal" : 1}},
        {
            $group :{
                "_id" : "$deptno", 
                "minSal" : {$min : "$sal"}} });    
              
// q3
db.Emp.aggregate({
    $project : {
        "empno" : 1,
        "ename" : 1,
        "job" : 1,
        "sal" : 1,
        "deptno" : 1,
        "dname" : 1
        }},
        {
            $match : {"job" : "CLERK"}
});

// q4
db.Emp.aggregate({
    $project : {
        "empno" : 1,
        "ename" : 1,
        "job" : 1,
        "mgr" : 1,
        "hiredate" : 1,
        "sal" : 1,
        "deptno" : 1}},
        {
            $match : {"deptno" : $where}});
            
// q5

// q6            
db.Emp.find({},{"empno" : 1, "ename" : 1, "deptno" : 1, "dname" : 1, "loc" : 1});

// q7
db.Emp.aggregate({
    $project : {
        "deptno" : 1,
        "dname" : 1,
        "ename" : 1}},
        {
            $sort: {"deptno" : 1}});