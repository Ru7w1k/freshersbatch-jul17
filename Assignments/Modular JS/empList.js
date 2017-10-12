// Employee Class using basic modular pattern
function Employee(_empName, _empSalary, _empId, _empDeptNo) {
	// PRIVATE Variables
	var empName = _empName;
	var empSalary = _empSalary;
	var empId = _empId;
	var empDeptNo = _empDeptNo;

	return {
		getEmpName : function() {
			return empName;
		},		
		getEmpSalary : function() {
			return empSalary;
		},
		getEmpId : function() {
			return empId;
		},
		getEmpDeptNo : function() {
			return empDeptNo;
		}
	}
};

// EployeeList using Basic Modular Patten : Non Constructors
var EmployeeList = (function() {
	var empArr = [];

	return {
		sort : function() {
			empArr.sort(function(a,b) {
				return a.getEmpId() - b.getEmpId();
			})
		},

		add : function(emp) {
			empArr.push(emp);
		},

		getEmp : function() {
			return empArr;
		}

	}
})();

function load() {
	var Emp1 = new Employee("Rut", 35000, 142, 001);
	var Emp2 = new Employee("Test", 23456, 75, 001);
	var Emp3 = new Employee("User", 24862, 10, 002);
	var Emp4 = new Employee("TestTest", 8456, 7, 002);
	var Emp5 = new Employee("UserTest", 34523, 747, 002);

	var res = "";
	res += "<br>ID : " + Emp1.getEmpId() + "<br>Name : " + Emp1.getEmpName() + "<br>Salary : " + Emp1.getEmpSalary() + "<br>DeptNo : " + Emp1.getEmpDeptNo() + "<br><br>";
	res += "<br>ID : " + Emp2.getEmpId() + "<br>Name : " + Emp2.getEmpName() + "<br>Salary : " + Emp2.getEmpSalary() + "<br>DeptNo : " + Emp2.getEmpDeptNo() + "<br><br>";
	res += "<br>ID : " + Emp3.getEmpId() + "<br>Name : " + Emp3.getEmpName() + "<br>Salary : " + Emp3.getEmpSalary() + "<br>DeptNo : " + Emp3.getEmpDeptNo() + "<br><br>";
	res += "<br>ID : " + Emp4.getEmpId() + "<br>Name : " + Emp4.getEmpName() + "<br>Salary : " + Emp4.getEmpSalary() + "<br>DeptNo : " + Emp4.getEmpDeptNo() + "<br><br>";
	res += "<br>ID : " + Emp5.getEmpId() + "<br>Name : " + Emp5.getEmpName() + "<br>Salary : " + Emp5.getEmpSalary() + "<br>DeptNo : " + Emp5.getEmpDeptNo() + "<br><br>";

	EmployeeList.add(Emp1);
	EmployeeList.add(Emp2);
	EmployeeList.add(Emp3);
	EmployeeList.add(Emp4);
	EmployeeList.add(Emp5);

	res += "<h4>From Emp List</h4>";

	var list = EmployeeList.getEmp();
	for (var i in list) {
		res += "<br>ID : " + list[i].getEmpId() + "<br>Name : " + list[i].getEmpName() + "<br>Salary : " + list[i].getEmpSalary() + "<br>DeptNo : " + list[i].getEmpDeptNo() + "<br><br>";
	}

	res += "<h4>After Sort</h4>";
	
	EmployeeList.sort();

	list = EmployeeList.getEmp();

	for (var i in list) {
		res += "<br>ID : " + list[i].getEmpId() + "<br>Name : " + list[i].getEmpName() + "<br>Salary : " + list[i].getEmpSalary() + "<br>DeptNo : " + list[i].getEmpDeptNo() + "<br><br>";
	}
	
	document.getElementById('ans').innerHTML = res;

}
