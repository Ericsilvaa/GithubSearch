<template>
    <div class="usuarioInicio">
        <div class="containerSearch">
            <h1 class="tituloHome">Github <span class="tituloSearch">Search</span></h1>
            <div class="containerInput">
                <input class="pesquisaHome" type="text" v-model="nomeUsuario" @keydown.enter="buscarUsuario" required>
                <span class="placeholderUsuario">Nome de Usuário</span>
                <button class="botaoPesquisa" @click="buscarUsuario">Buscar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nomeUsuario: '',
            usuario: []
        }
    },
    methods: {
        buscarUsuario(){
           this.$http(`${this.nomeUsuario}`)
            .then(r => {
                this.usuario = r.data
                this.nomeUsuario = ''
            })
           
        }
    }
}
</script>

<style>
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
    .pesquisaHome {
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
        background: rgba(0, 0, 0, 0.7);
        border: none;
        color: #fff;
        cursor: pointer;
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
    
    .pesquisaHome:focus {
        border: none;
        outline: 2px solid rgba(0, 0, 0, 0.7); ;
    }

    .pesquisaHome:focus + .placeholderUsuario,
    .pesquisaHome:valid + .placeholderUsuario {
        top: -13px;
        left: 15px;
        font-size: 1.075rem;
        padding: 0 10px;
        background: #fff;
    }

</style>