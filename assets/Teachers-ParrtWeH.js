import{T as o}from"./Table-BJ41LKJo.js";import{_ as t,c as n,a as r,b as c,d as m,o as l}from"./index-bq8nZKDb.js";const i={name:"Teachers",components:{Table:o},data(){return{headers:["ID","Name","Subject","Email"],teachers:[{id:1,name:"Mr. Smith",subject:"Math",email:"smith@example.com"},{id:2,name:"Ms. Johnson",subject:"English",email:"johnson@example.com"},{id:3,name:"Mr. Brown",subject:"Science",email:"brown@example.com"}]}}},h={class:"flex-1 p-6"};function p(d,e,b,f,s,u){const a=m("Table");return l(),n("main",h,[e[0]||(e[0]=r("h2",{class:"text-2xl font-bold mb-4 flex justify-center"},"Teachers",-1)),c(a,{headers:s.headers,rows:s.teachers},null,8,["headers","rows"])])}const T=t(i,[["render",p]]);export{T as default};