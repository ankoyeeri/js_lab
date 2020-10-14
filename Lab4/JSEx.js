function Gruppa(n, spec, kolich) {
    this.n = n;
    this.spec = spec;
    this.kolich = kolich;

    this.add_stud = function add_stud(k) {
        this.kolich += k;
        document.write("В группу " + this.n + " добавили " +
            k + " студентов</br>")
    }

    //  Исключение студентов
    this.sub_stud = function sub_stud(k) {
        this.kolich -= k;
        document.write("Из группы " + this.n + " было исключено " +
            k + " студентов. </br>")
    }
}

function ex1() {
    let group1 = new Gruppa(2, "ИСиТ", 28);
    let group2 = new Gruppa(3, "ПОиТ", 30)

    group1.add_stud(3);
    group1.sub_stud(1);

    group2.add_stud(5);
    group2.sub_stud(2);

    document.write("<p>");
    document.write("Количетсво студентов в " + group1.n + " группе: " + group1.kolich + "</br>");
    document.write("Количетсво студентов в " + group2.n + " группе группе: " + group2.kolich + "</br>");
    document.write("</p>");
}

function Student(name, surname, physicSubj, mathSubj, compScienceSubj) {
    this.name = name;
    this.surname = surname;
    this.physicSubj = physicSubj;
    this.mathSubj = mathSubj;
    this.compScienceSubj = compScienceSubj;

    //  Подсчет среднего балла
    this.commonMark = function commonMark() {
        let commonMark = new Number();
        commonMark = (this.physicSubj + this.mathSubj + this.compScienceSubj) / 3;
        return commonMark.toFixed(3);
    }

    //  Вывод информации о студенте
    this.show_info = function show_info() {
        document.write("<p>");
        document.write("Информация о студенте: </br>");
        document.write(this.name + " " + this.surname + "</br>");
        document.write("Физика: " + this.physicSubj + "</br>");
        document.write("Математика: " + this.mathSubj + "</br>");
        document.write("Информатика: " + this.compScienceSubj + "</br>");
        document.write("Средний балл: " + this.commonMark() + "</br>");
        document.write("</p>");
    }

    //  Вывод в окне
    this.output_with_alert = function output_with_alert() {
        alert("Студент: " + this.name + " " + this.surname);
        alert("Оценки" +
            "\nФизика: " + this.physicSubj +
            "\nМатематика: " + this.mathSubj +
            "\nИнформатика: " + this.compScienceSubj
        );
        alert("Средний балл: " + this.commonMark());
    }
}

function ex2() {
    let student1 = new Student("Ярослав", "Гуз", 10, 8, 7);
    let student2 = new Student("Дмитрий", "Ваганыч", 4, 10, 7);
    let student3 = new Student("Виталий", "Озон", 7, 6, 9);
    
    student1.output_with_alert();
    student1.show_info();
    student2.show_info();
    student3.show_info();

    Student.prototype.year = this.year;
    
    student1.year = 1;
    student2.year = 2;
    student3.year = 3;
    
    document.write("<p>");
    document.write("Курс первого студента: " + student1.year + "</br>")
    document.write("Курс второго студента: " + student2.year + "</br>")
    document.write("Курс третьего студента: " + student3.year + "</br>")
    document.write("</p>");
}