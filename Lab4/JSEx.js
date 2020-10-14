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
    this.sub_stud = function sub_stud(k){
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
    document.write("Количетсво студентов в "+ group2.n + " группе группе: " + group2.kolich + "</br>");
    document.write("</p>");
}