let book1 = {
  name: '算法导论',
  data: '2006-9',
  value: 85,
  number: 1
}
let book2 = {
  name: 'UNIX编程艺术',
  data: '2006-2',
  value: 59,
  number: 1
}
let book3 = {
  name: '编程珠玑',
  data: '2008-10',
  value: 39,
  number: 1
}
let book4 = {
  name: '代码大全',
  data: '2006-3',
  value: 128,
  number: 1
}

const shop = new Vue({
  el: '#tab',
  data: {
    currentIndex: 3,
    isShow: true,
    books: [book1, book2, book3,book4],
  },
  computed: {
    money() {
      let money = 0
      for (let i=0; i < this.books.length; i++){
        money += (this.books[i].value * this.books[i].number)
      }
      return money
    }
  },
  methods: {
    del(index){
      this.books.splice(index,1)
      if (this.books.length == 0){
        this.isShow = false
      }
    }
  }
})

