 product = function(code, category, name, description, price, link){
        this.code = code;
        this.category = category;
        this.name = name;
        this.description = description;
        this.price = price;
        this.link = link;

    }

    var products = [
        new product('001','Laptop','Asus Vivobook S15','Supper Thin', 1200,'https://tiki.vn'),
        new product('002','Desktop','Laptop Lenovo Ideapad 320','Supper Thin', 800,'https://tiki.vn'),
        new product('003','Phone','Laptop HP 246 G6','Thin', 550,'https://tiki.vn'),
        new product('004','Camera','MacBook Pro Touch Bar 2018 ','Supper Thin', 2000,'https://tiki.vn'),
    ]

    function initiateItems() {
        var html = products.map((product, index) => `<tr data-id="${product.code}">
                            <td>${index + 1}</td>
                            <td>${product.code}</td>
                            <td>${product.category}</td>
                            <td>${product.name}</td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                            <td>${product.link}</td>
                    </tr>`).join('\r\n');
        $('#products tbody').html(html);

    }
    function clear(){
        document.getElementById('code').value ="";
        document.getElementById('name').value ="";
        document.getElementById('price').value ="";
        document.getElementById('link').value ="";
        document.getElementById('description').value ="";

    }
    function showAllProducts(products) {
        var html = products.map((product, index) => `<tr data-id="${product.code}">
                            <td>${index + 1}</td>
                            <td>${product.code}</td>
                            <td>${product.category}</td>
                            <td>${product.name}</td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                            <td>${product.link}</td>
                    </tr>`).join('\r\n');
        $('#products tbody').html(html);

    }
    $(initiateItems);
    var currentCategory = 0;
    $(function () {
        
        $('#category').on('click', 'a', function () {
            document.getElementById("code").readOnly = true;
            var category = $(this).attr('data-category');
            currentCategory = category;
            var selectedProducts = products.filter(product => product.category == category);
            showAllProducts(selectedProducts);
            
        })

        $('#products').on('click', 'tbody tr', function (evt) {
            document.getElementById("code").readOnly = true;
            //alert($(this).attr('data-id'));
            var code =$(this).attr('data-id');
            var product = products.find(product => product.code == code);

            $('#itemdetail input, #itemdetail select, #itemdetail textarea').each(function ()
            {
                var name =$(this).attr('name');
                $(this).val(product[name]);
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
                product[name] = $(this).val();
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
       