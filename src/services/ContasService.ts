import axios from "axios";
import { useEffect } from "react";
import { ContaDto } from "../dtos/ContaDto";
import { ViacepFindDto } from "../dtos/ViacepFindDto";

export class ContasService {

    static all() {
        return axios.get(`http://localhost:3000/contas`);
    }

    static create(contaDto: ContaDto) {
        return axios.post('http://localhost:3000/contas', contaDto);
    }
}