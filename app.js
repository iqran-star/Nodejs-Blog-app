const express=require('express')
const mongoose=require('mongoose')
const articlesRouter=require('./routers/articles')
const app=express()

mongoose.connect('mongodb://127.0.0.1/blog')
  
app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    
    const articles=[{
        title:'Blog-1',
        createdAt:new Date(),
        description:'this is first blog'
    },
    {
        title:'Blog-2',
        createdAt:new Date(),
        description:'this is second blog2'
    },]
    res.render('articles/index',{articles:articles})
})
app.use('/articles',articlesRouter)
app.listen(5000)
