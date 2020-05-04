new Vue({
    el: '#app',
    data: {
        name: '',
        course: '',
        acceptancePeriod: '',
        students: [
            {name: '野呂浩良', course: '機械学習コース', acceptancePeriod: '2019年01月期' },
            {name: '富永修司', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
            {name: '斉藤一起', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
        ]
    },
    methods: {
        addStudent: function(event) {
            if(this.name == '' || this.course == '' || this.acceptancePeriod == '' ) return;
            var student = {
                name: this.name,
                course: this.course,
                acceptancePeriod: this.acceptancePeriod,
            };
            this.students.push(student);
            this.name = '', this.course = '', this.acceptancePeriod = ''
        },
        deleteStudent: function (index) {
            this.students.splice(index,1)
        }
    }
})