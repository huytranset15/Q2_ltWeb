Class = function(id, name, students){
    this.id = id;
    this.name = name;
    this.students = students;
}

Class.prototype.addStudents = function(student){

}

Student = function (id, name, birthday, address) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.address = address;
}
var students = [
    new Student('001','Nguyễn Tiến Đức','4/3/1997', 'Bình Dương'),
        new Student('002','Trần Nguyễn Quang Huy','4/9/1997','Bình Dương'),
        new Student('003','Trương Nguyễn Hoài Quang','unknow','Dĩ An'),
        new Student('004','Huỳnh Minh Huy','unknow ','Bình Dương'),
        new Student('005','Trần Vĩnh Thiện Phúc','unknow ','Quận 8'),
];

var classes = [
    new Class('1','Class 1', [students[1], students[3], students[4]]),
    new Class('2','Class 2', [students[0], students[2], students[3]]),
    new Class('3','Class 3', [students[1], students[3], students[2]]),
]
//khoi tao ham cho chay ; Cach 1
function initiateItems() {
    var html = students.map((student, index) => `<tr data-id="${student.id}">
                        <td>${index + 1}</td>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.birthday}</td>
                        <td>${student.address}</td>
                </tr>`).join('\r\n');
    $('#students tbody').html(html);

}
function showAllStudents(students) {
    var html = students.map((student, index) => `<tr data-id="${student.id}">
                        <td>${index + 1}</td>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.birthday}</td>
                        <td>${student.address}</td>
                </tr>`).join('\r\n');
    $('#students tbody').html(html);

}
    function initiateClasses() {
        var html = classes.map(x => `<li data-classID = "${x.id}"><a href="#${x.id}" >${x.name} <span stype="color:blue">${x.students.length}</span> </a></li>`) .join('');
        $('#major').html(html);

    }
    $(initiateItems);
$(initiateClasses);
var currentClass = 0;
    $(function () {
        initiateClasses();
        if(location.hash === ""){
            showAllStudents(students)
        }else{
            id = location.hash.substring(1);
            showAllStudents(classes.find(x=>x.id==id).students)
            $(`li[data-classID=${id}]`).addClass("active");
        }})

$(function () {
    // initiateClasses(classes);
    // if(location.hash == ""){
    //     showAllStudents(students)
    // }else{
    //     id = location.hash.substring(1);
    //     showAllStudents(classes.find(x=>x.id=id).students)
    //     $(`li[data-classId=${id}]`).addClass("active");
    // }


    $('#major').on('click', 'a', function () {
        var classs = $(this).parent().attr('data-classID');
        currentmajor = classs;
        $('ul li').removeClass('active');
        $(this).parent().addClass('active');
        var selectedClasses = classes.filter(x => x.id === classs)[0].students;
        showAllStudents(selectedClasses);
    })
    $('#students').on('click', 'tbody tr', function (evt) {
        //alert($(this).attr('data-id'));
        document.getElementById("cd").readOnly = "true";
        var id = $(this).attr('data-id');
        var student = students.find(student => student.id == id);

        $('#itemdetail input, #itemdetail select, #itemdetail textarea').each(function () {
            var name = $(this).attr('name');
            $(this).val(student[name]);
        })

        // $('#itemdetail input[name="id"').val(student.id);
        // $('#itemdetail input[name="name"').val(student.name);

    })

    $('#btnSave').on('click', function () {
        //get student from form  
        var student = {}
        $('#itemdetail input, #itemdetail select, #itemdetail textarea').each(function () {
            var name = $(this).attr('name');
            student[name] = $(this).val();
        });

        var index = students.findIndex(x => x.id === student.id);
        students[index] = student;
        var selectedStudents = students.filter(student => currentMajor == '' || student.major == currentMajor);
        showAllStudents(selectedStudents);
    })

    $('#btnAdd').on('click', function () {
        var student = {}
        $('#itemdetail input , #itemdetail select, #itemdetail textarea').each(function () {
            var name = $(this).attr('name');
            student[name] = $(this).val();
        });
        if (students.find(x => x.id == student.id) == null) {
            students.push(student);
        } else {
            alert('ID existed!!!!');
        }

        showAllStudents(students);
    })
    $('#btnDel').click(function(){
        var student = {};
        $('#itemdetail input, #itemdetail select, #itemdetail textarea').each(function ()
            {
                var name =$(this).attr('name');
                student[name] = $(this).val();
            });
            var index = students.findIndex(x => x.id === student.id);
            students.splice(index,1);
            var selectedPtudents = students.filter(student => currentMajor ==''||student.major == currentMajor);
            showAllStudents(selectedPtudents);
           })
});

