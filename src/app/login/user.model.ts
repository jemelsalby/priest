export class User{

    constructor(
        public email: string,
        public id: string,
        public displayName: string,
        private _token: string,
        private _tokenExpiry: Date
    ){}
    
    get token(){
        if (!this._token || new Date() > this._tokenExpiry){
            return null;
        }
        return this._token;
    }

}