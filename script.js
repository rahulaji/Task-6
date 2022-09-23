
//calss movie task

class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    //getter
    
    get PG(){
        return this.rating;   
     }
}const flim= new movie("rayale casino","Eon production","PG13")
console.log(flim.PG)


//...............................................................................................

//3. Class that hold person details


class person{
    constructor(name,dob,gender,bloodGroup){
        this.name=name;
        this.dob=dob;
        this.gender=gender;
        this.bloodGroup;
    }
} const details =new person("Rahul","22/11/1996","male","bloodGroup");

console.log(details)



//4. Uber PRize calculation

class uberPrize{
    constructor(goInterCity__perKM,sedanInterCity__perKM,hatchBagInterCity__perKM,xuvInterCity__perKM){
        this.goInterCity__perKM=goInterCity__perKM * 12;
        this.sedanInterCity__perKM=sedanInterCity__perKM * 18;
        this.hatchBagInterCity__perKM=hatchBagInterCity__perKM * 15;
        this.xuvInterCity__perKM=xuvInterCity__perKM * 19;
    } 
  
}   
const prizeUber= new uberPrize(1,1,1,1)
    
 console.log(prizeUber)
    
