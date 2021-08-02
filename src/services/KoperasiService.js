import axios from 'axios';

const KOPERASI_API_BASE_URL = "http://localhost:8118/rest";
const KOPERASI_MONGO_API_BASE_URL = "http://localhost:8119";

class KoperasiService {

    getMemberList(){
        return axios.get(KOPERASI_API_BASE_URL + '/member/list');
    }

    getTransactionMember(memberId){
        return axios.get(KOPERASI_MONGO_API_BASE_URL + '/list?memberId=ddb65f1b64f94f57b49530993259ec80');
    }

    createMember(member){
        return axios.post(KOPERASI_API_BASE_URL + '/member/save', member);
    }

    createSimpanan(data){
        return axios.post(KOPERASI_API_BASE_URL + '/transaction/simpan', data);
    }

    createPinjaman(data){
        return axios.post(KOPERASI_API_BASE_URL + '/transaction/pinjam', data);
    }

    createBayar(data){
        return axios.post(KOPERASI_API_BASE_URL + '/transaction/bayar', data);
    }

    createTarik(data){
        return axios.post(KOPERASI_API_BASE_URL + '/transaction/tarik', data);
    }
}

export default new KoperasiService()