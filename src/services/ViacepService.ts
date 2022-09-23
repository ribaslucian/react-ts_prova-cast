import axios from "axios";
import { useEffect } from "react";
import { ViacepFindDto } from "../dtos/ViacepFindDto";

export class ViacepService {

    static search(viacepFindDto: ViacepFindDto) {
        return axios.get(`https://viacep.com.br/ws/${viacepFindDto.cep}/json/`);
    }
}