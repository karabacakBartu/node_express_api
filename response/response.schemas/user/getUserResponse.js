export let getUserResponse;
getUserResponse = {
    type: "object",
    additionalProperties: false,
    properties: {
        status: {type: "string"},
        statusCode: {type: "number"},
        message: {type: "string"},
        data: {
            type: "array",
            items: {
                type: "object", additionalProperties: false, properties: {

                    _id: {type: "string"},
                    name: {type: "string"},
                    surname: {type: "string"},
                    email: {type: "string"},
                    phoneNumber: {type: "string"},
                    birthDate: {type: "string"},
                    gender: {type: "string"},
                    bookRights: {type: "number"},
                    takenBooks: {
                        type: "array", items: {
                            type: "object", additionalProperties: false, properties: {
                                _id: {type: "string"},
                                bookName: {type: "string"},
                                author: {type: "string"},
                                kind: {type: "string"},
                                vol: {type: "number"},
                                releaseDate: {type: "string"},
                                returnDate: {type: "string"},
                                takingDate: {type: "string"},
                            }

                        }
                    },
                }
            },
        },
    },
};