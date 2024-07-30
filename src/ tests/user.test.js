import supertest from "supertest";
import app from "../index.js";

describe("POST /criar", () => {
  it("criando dados no bd", async () => {
    let user = {
      nome: "davi",
      senha: "lucasemanoel",
      email: "lucas@gmail.com",
      dataNascimento: "2002-12-25",
    };

    await supertest(app)
      .post("/criar")
      .send(user)
      .expect(201)
      .expect((res) => {
        try {
          let { message } = res.body;
          expect(message).toBe("Usuario criado com sucesso");
        } catch (error) {
          throw new Error(`error ${res} 
                                 ${error}`);
        }
      });
  });

  it("recusando dados vazios", async () => {
    let user = {
      nome: "",
      senha: "lucasemanoel",
      email: "",
      dataNascimento: "2002-12-25",
    };

    await supertest(app)
      .post("/criar")
      .send(user)
      .expect(400)
      .expect((res) => {
        try {
          let { message } = res.body;
          expect(message).toBe("Preencha todos os dados");
        } catch (error) {
          throw new Error(`error ${res}
                                 ${error}`);
        }
      });
  });
});

describe("POST  /login", () => {
  it("Login de usuario feito com sucesso", async () => {
    let user = {
      senha: "lucasemanoel",
      email: "lucas@gmail.com",
    };

    await supertest(app)
      .post("/login")
      .send(user)
      .expect(200)
      .expect((res) => {
        try {
          let { message } = res.body;
          expect(message).toBe("Usuario autenticado");
        } catch (error) {
          throw new Error(`error ${res}
                                     ${error}`);
        }
      });
  });

  it("Login não encontrado", async () => {
    let user = {
      senha: "lucasemanoel",
      email: "rafael@gmail.com",
    };

    await supertest(app)
      .post("/login")
      .send(user)
      .expect(404)
      .expect((res) => {
        try {
          let { message } = res.body;
          expect(message).toBe("Usuario não encontrado");
        } catch (error) {
          throw new error(`error ${res}`);
        }
      });
  });
  it("Dados nao preenchidos", async () => {
    let user = {
      senha: "lucasemanoel",
      email: "",
    };

    await supertest(app)
      .post("/login")
      .send(user)
      .expect(400)
      .expect((res) => {
        try {
          let { message } = res.body;
          expect(message).toBe("Email e senha são obrigatarios");
        } catch (error) {
          throw new Error(`error ${res}
                                 ${error}`);
        }
      });
  });
});

describe("PATCH /update", () => {
  it("senha atualizada com sucesso", async () => {
    let user = {
      email: "lucas@gmail.com",
      senha: "lucasemanoel",
      NovaSenha: "itachi007",
    };

    await supertest(app)
      .patch("/update")
      .send(user)
      .expect(200)
      .expect((res) => {
        try {
          let { message } = res.body;
          expect(message).toBe("Senha trocado com sucesso");
        } catch (error) {
          throw new Error(`error ${res}
                                     ${error}`);
        }
      });
  });

  it("Usuario não encontrado", async () => {
    let user = {
      email: "jhon@gmail.com",
      senha: "lucasemanoel",
      NovaSenha: "itachi007",
    };

    await supertest(app)
      .patch("/update")
      .send(user)
      .expect(400)
      .expect((res) => {
        try {
          let { message } = res.body;
          expect(message).toBe("Usuario não encontrado");
        } catch (error) {
          throw new Error(`error ${res}
                                ${error}`);
        }
      });
  });

  it("Dados não preenchidos", async () => {
    let user = {
      email: "lucas@gmail.com",
      senha: "lucasemanoel",
      NovaSenha: "",
    };
    supertest(app)
      .patch("/update")
      .send(user)
      .expect(400)
      .expect((res) => {
        try {
          let { message } = res.body;
          expect(message).toBe(
            "email,senha atual e nova senha são obrigatorios"
          );
        } catch (error) {
          throw new Error(`error ${res}`);
        }
      });
  });
});

describe("GET /USER", () => {
  it("Usuario encontrado", async () => {
    let user = {
      senha: "itachi007",
      email: "lucas@gmail.com",
    };
    supertest(app).get("/usuario").send(user).expect(200);
  });

  it("Usuario não encontrado", async () => {
    let user = {
      senha: "lucas",
      email: "lucas@gmail.com",
    };
    supertest(app)
      .get("/usuario")
      .send(user)
      .expect(400)
      .expect((res) => {
        let { message } = res.body;
        expect(message).toBe("Usuario nao encontrado");
      });
  });

  it("Senha e email nao preenchidos", async () => {
    let user = {
      senha: "",
      email: "lucas@gmail.com",
    };
    supertest(app)
      .get("/usuario")
      .send(user)
      .expect(400)
      .expect((res) => {
        let { message } = res.body;
        expect(message).toBe("email e senha são obrigatorios");
      });
  });
});
