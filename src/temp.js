const outer = [
    {
        a: {
            k: { age: 10 }
        },
        b: {
            k: {
                m: {
                    arr: [1, 2, 3, 4, 5]
                }
            }
        }
    },
    {
        a: {
            k: { age: 10 }
        },
       b: {
            k: {
                m: {
                    arr: [1, 2, 3, 4, 5]
                }
            }
        }
    }
];
 sum=0;
for(i=0;i<outer.length;i++){
    const t=outer[i].b.k.m.arr.reduce(
        (ele,s)=>{
     return (ele+s);
        }
        ,0
     );
    sum+=t;
}
console.log(sum)


