import {RegisterUserOnMailingList} from "../src/register-user-on-mailing-list"
import {EmailNotificationService} from "../src/email-notification-service"
import {UserRepository} from "../src/user-repository"

describe('MailingList',() => {
    let registerUserOnMailingList: RegisterUserOnMailingList
    let emailNotificationService: EmailNotificationService
    let userRepository: UserRepository

    beforeEach(function(){
        registerUserOnMailingList = new RegisterUserOnMailingList(
            userRepository = new UserRepository(),
            emailNotificationService = new EmailNotificationService()
        )
    }
    )
    /*CASO 1 - USUÁRIO NÃO POSSUI REGISTRO*/
    it("Deve retornar um erro caso o usuário não possua registro em nosso banco de dados", () =>{
        const spy = jest.spyOn(userRepository, 'add')
        spy.mockReturnValue(false)
        expect(() => {
            registerUserOnMailingList.execute({
                name: 'Usuário',
                email: "usuario@teste.com"
            })
        }
        ).toThrow("User not created on database")
    })

    /* CASO 2 - E-MAIL JÁ POSSUI REGISTRO */
    it("Deve retornar um erro se o e-mail do usuário já estiver em nosso banco de dados",() =>{
        const spy = jest.spyOn(userRepository, 'findBy')
        spy.mockReturnValue(
            {
                name: 'Usuário 2',
                email: 'usuario2@teste.com'
            }
        )
        expect(()=>{
            registerUserOnMailingList.execute({
                name: 'Usuário 2',
                email: 'usuario2@teste.com'
            })
        }).toThrow("User already registered")
    })

    /* CASO 3 - E-MAIL DE VERIFICAÇÃO NÃO ENVIADO*/
    it("Deve retornar um erro caso a confirmação não seja enviada",()=>{
        const spy = jest.spyOn(emailNotificationService,"send")
        spy.mockReturnValue(false)
        expect(() =>{
            registerUserOnMailingList.execute({
                name: "Usuario 3",
                email: "usuario3@teste.com"
            })
        }).toThrow("E-mail notification not sent")
    })
    
})