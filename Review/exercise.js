 student = function(id, name, birthday, address,Class){
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.address = address;
        this.Class = Class;
    }
    Class = function(id, name){
        this.id= id;
        this.name;
        this.students =[];
    }
    Class.prototype.addStudents = function(student){
        students.push(Student);
    }
   var classes =[
       new Class = ('1','Class1'),
       new Class = ('2','Class2'),
       new Class = ('3','Class3'),
   ]
    var students = [
        new student('001','Nguyễn Tiến Đức','4/3/1997', 'Bình Dương','IT'),
        new student('002','Trần Nguyễn Quang Huy','4/9/1997','Bình Dương','Business'),
        new student('003','Trương Nguyễn Hoài Quang','unknow','Dĩ An','Nurse'),
        new student('004','Huỳnh Minh Huy','unknow ','Bình Dương','Business'),
        new student('005','Trần Vĩnh Thiện Phúc','unknow ','Quận 8','IT'),
    ]

    function initiateClasses() {
        var html = classes.map((Class, index) => `<tr data-id="${Class.id}">
                            <td>${index + 1}</td>
                            <td>${Class.id}</td>
                            <td>${Class.name}</td>
                    </tr>`).join('\r\n');
        $('#Classes tbody').html(html);

    }
    function initiateItems() {
        var html = students.map((student, index) => `<tr data-id="${student.id}">
                            <td>${index + 1}</td>
                            <td>${student.id}</td>
                            <td>${student.name}</td>
                            <td>${student.birthday}</td>
                            <td>${student.address}</td>
                            <td>${student.Class}</td>
                    </tr>`).join('\r\n');
        $('#students tbody').html(html);

    }
    function clear(){
        document.getElementById('code').value ="";
        document.getElementById('name').value ="";
        document.getElementById('price').value ="";
        document.getElementById('link').value ="";
        document.getElementById('description').value ="";

    }
    function showAllProducts(students) {
        var html = students.map((student, index) => `<tr data-id="${student.id}">
                            <td>${index + 1}</td>
                            <td>${student.id}</td>
                            <td>${student.name}</td>
                            <td>${student.birthday}</td>
                            <td>${student.address}</td>
                            <td>${student.Class}</td>
                    </tr>`).join('\r\n');
        $('#students tbody').html(html);

    }
    $(initiateClasses);
    $(initiateItems);
    var currentCategory = 0;
    $(function () {
        
        $('#Class').on('click', 'a', function () {
            document.getElementById("id").readOnly = true;
            var Class = $(this).attr('data-Class');
            currentCategory = Class;
            var selectedProducts = students.filter(student => student.Class == Class);
            showAllProducts(selectedProducts);
            
        })

        $('#students').on('click', 'tbody tr', function (evt) {
            document.getElementById("id").readOnly = true;
            //alert($(this).attr('data-id'));
            var id =$(this).attr('data-id');
            var student = students.find(student => student.id == id);

            $('#itemdetail input, #itemdetail select, #itemdetail textarea').each(function ()
            {
                var name =$(this).attr('name');
                $(this).val(student[name]);
            });

            // $('#itemdetail input[name="code"').val(product.code);
            // $('#itemdetail input[name="name"').val(product.name);

        });
        $('#BtnSave').click(function (){
            //    var code = $('#itemdetail input[name="code"]').val();
            //    var product = products.find(product => product.code == code);
            //    $('#itemdetail input, #itemdetail select, #itemdetail textarea').each(function ()
            //     {
            //         var name =$(this).attr('name');
            //         product[name] = $(this).val();
            //     });
            //     showAllProducts(products);
            var product = {};
            
            $('#itemdetail input, #itemdetail select, #itemdetail textarea').each(function ()
            {
                var name =$(this).attr('name');
                student[name] = $(this).val();
            });
            var index = products.findIndex(x => x.code === product.code);
            products[index] = product;
            var selectedProducts = products.filter(product => currentCategory ==''||product.category == currentCategory);
            showAllProducts(selectedProducts);
            clear();
           });
           $('#BtnAdd').click(function(){
            var product = {};
            $('#itemdetail input , #itemdetail select, #itemdetail textarea').each(function(){
                var name = $(this).attr('name');
                product[name] = $(this).val();
            });
            if(products.find(x => x.code === product.code)==null){
                products.push(product);
                
            }else{
                alert("Code can't be the same!!!");
            }
            showAllProducts(products);
            clear();
        }); 
        $('#BtnDel').click(function(){
        $('#itemdetail input, #itemdetail select, #itemdetail textarea').each(function ()
            {
                var name =$(this).attr('name');
                product[name] = $(this).val();
            });
            var index = products.findIndex(x => x.code === product.code);
            products.splice(index,1);
            var selectedProducts = products.filter(product => currentCategory ==''||product.category == currentCategory);
            showAllProducts(selectedProducts);
           });  
    });     
       