<template>
    <div class="usuarioInicio" >
        <div class="containerSearch" v-if="this.ativo">
            <h1 class="tituloHome">Github <span class="tituloSearch">Search</span></h1>
            <div class="containerInput">
                <input class="barraPesquisa" type="text" v-model="nomeUsuario" @keydown.enter="buscarUsuario" required>
                <span class="placeholderUsuario">Nome de Usuário</span>
                <button class="botaoPesquisa" @click="buscarUsuario"></button>
            </div>
        </div>

        <PaginaCarregando v-else />
    </div>
</template>

<script>
import { api } from '@/puglins/axios'
import ResultadoSearch from '../Resultado/ResultadoSearch.vue'
import PaginaCarregando from '../PaginaCarregando.vue'


export default {
  components: { ResultadoSearch, PaginaCarregando },
    data() {
        return {
            ativo: true,
            nomeUsuario: '',
            usuario: [],
            repo: []
        }
    },
    computed: {

    },
    methods: {
        async buscarUsuario(){
            this.ativo = false

            try {
                const buscarUser = await api.get(`${this.nomeUsuario}`)
                const buscarRepos = await api.get(`${this.nomeUsuario}/repos`)
                this.nomeUsuario = ''
                
                this.$router.push("/resultado")

                this.usuario = buscarUser.data
                this.repo = buscarRepos.data
                
                this.$store.state.usuarios.push(this.usuario)
                this.$store.state.repos.push(...this.repo)
                console.log(this.$store.state.repos.push(...this.repo))
                
            } catch (error) {

                if (error.response.status == 404) {
                    this.$router.push("/404")
                    setTimeout(() => {
                        this.$router.push("/")
                    }, 5000);
                    
                } else {
                    console.log("Outro Erro Encontrado")
                }
                
            }

        }
    }
}
</script>

<style scoped>
    /* PRINCIPAL */
    .usuarioInicio {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .containerSearch {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
    }

    .tituloHome {
        margin-bottom: 5px;
        font-size: 4rem ;
        font-weight: 700;
        font-style: italic;
    }

    .tituloSearch {
        font-weight: 500;
    }


    /* PESQUISA */
    .barraPesquisa {
        width: 600px;
        height: 50px;
        font-size: 1.275rem;
        font-weight: 500;
        font-style: italic;
        padding-left: 10px;
        border: solid 2px rgba(0, 0, 0, 0.7);
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        outline: none;
        cursor: text;
    }
    
    .botaoPesquisa {
        border: none;
        color: #fff;
        cursor: pointer;
        background: url(../../assets/search.svg) rgba(0, 0, 0, 0.7) no-repeat center;
        padding: 25px 30px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .containerInput{
        position: relative;
        display: flex;
    }

    .placeholderUsuario{ 
        position: absolute;
        top: 14px;
        left: 15px;
        font-size: 1.075rem;
        letter-spacing: 0.05em;
        pointer-events: none;
        font-weight: 600;
        transition: .3s;
        color: #181818;
    }
    
    .barraPesquisa:focus {
        border: none;
        outline: 1px solid rgba(0, 0, 0, 0.7); ;
    }

    .barraPesquisa:focus + .placeholderUsuario,
    .barraPesquisa:valid + .placeholderUsuario {
        top: -13px;
        left: 15px;
        font-size: 1.075rem;
        padding: 0 10px;
        background: #fff;
    }

</style>