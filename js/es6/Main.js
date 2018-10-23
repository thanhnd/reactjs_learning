
var company = new Company()
company.addEmployee(new Employee(01, "Thanh", "123@gmail.com", "123123", "20/10", "Nhan vien"))
company.addEmployee(new Employee(02, "Thao", "thao@gmail.com", "123123", "20/10", "Nhan vien"))
company.addEmployee(new Employee(03, "Thao03", "thao@gmail.com", "123123", "20/10", "Nhan vien"))


callModal = (modalTitle, readonly = false, type = 1) => {
    document.getElementById("header-title").innerHTML = modalTitle
    document.getElementById("msnv").readonly = readonly
    switch(type) {
        case 1:
          document.getElementById("btnThemNV").style.display = "block"
          document.getElementById("btnCapNhatNV").style.display = "none"
          break
        case 2:
          document.getElementById("btnThemNV").style.display = "none"
          document.getElementById("btnCapNhatNV").style.display = "block"
          break
    }
}

clearForm = () => {
    let elements = document.getElementsByClassName("input-sm")
    for(let element of elements) {
        element.value = ""
    }

    document.getElementById("chucvu").selectedIndex = 0
}

let maxRow = 2
let currentPage = 1

displayListingPage = () => {
    
    let total = company.employees.length;

    let start = (currentPage - 1) * maxRow
    let end = currentPage * maxRow
    if(end > total) {
        end = total
    }

    console.log(total, start, end)
    displayList(start, end)
    
    displayPage(total)
}

displayList = (start, end) => {
    let tbody = document.getElementById("tableDanhSach")
    let tr, td
    let employee
    tbody.innerHTML = ""

    for(let i = start; i < end; i++) {
        tr = document.createElement("tr")
        employee = company.employees[i]
        tbody.appendChild(tr)

        console.log(employee.reference)
        for(let j = 0; j < employee.reference.length; j ++) {
            td = document.createElement("td")
            td.innerHTML = employee.reference[j]
            tr.appendChild(td)
        }

        let btnEdit = `<a class="btn btn-primary text-white" data-toggle="modal" href="#myModal" id="edit_${employee.id}"><em class="fa fa-pencil"></em></a>`
        let btnDelete = `<a class="btn btn-danger text-white ml-2" id="delete_${employee.id}"><em class="fa fa-trash"/></em></a>`
        td = document.createElement("td")
        td.innerHTML = btnEdit + btnDelete
        td.setAttribute("align", "center")
        tr.appendChild(td)
    }
}

displayPage = (total) => {
    
    let pageNumber = Math.ceil(total/maxRow)

    let ulPage = document.getElementById("ulPhanTrang")
    ulPage.innerHTML = ""
    for(let i = 1; i <= pageNumber; i++) {
        let li = document.createElement("li")
        ulPage.appendChild(li)

        let a = document.createElement("a")
        a.setAttribute("class", "page-link")
        a.setAttribute("id", "page_" + i)
        a.innerHTML = i
        li.appendChild(a)

        switchPage("page_" + i)

    }
}

switchPage = (buttonId) => {
    document.getElementById(buttonId).addEventListener("click", () => {
        currentPage = buttonId.split("_")[1]

        displayListingPage()
    })
}


document.getElementById("btnThem").addEventListener("click", () => {
    clearForm()
    callModal("THÊM NGƯỜI DÙNG")

})

document.getElementById("btnThemNV").addEventListener("click", () => {
    // Validattion

    let id = document.getElementById("msnv").value
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let datepicker = document.getElementById("datepicker").value
    let title = document.getElementById("chucvu").value

    let employee = new Employee(id, name, email, password, datepicker)
    company.addEmployee(employee)

    swal("Thêm nhân viên thành công", "Danh sách nhân viên đã được cập nhật", "Đóng")

    displayListingPage()
})



displayListingPage()

