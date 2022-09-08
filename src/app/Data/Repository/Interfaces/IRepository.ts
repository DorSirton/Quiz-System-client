

interface IRepository{
    Get():any;
    GetById(id:number):any
    Post(item:any):any;
    Put(item:any):any;
    Delete(id:number):any;
    Succsses(respons:Response):any;
    Faild(error:String):any;
}
export default IRepository;