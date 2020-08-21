import {data} from './data.model'

export interface survey{
    "topicId": string,
    "topicName": string,
    "data": data[]
}