import { defineStore } from "pinia";
export const gameStore = defineStore("game", {
    state: () => ({
        userRound: true,
        end: false,
        lines: new Array(9),
    }),
    getters: {
        setWinner: (state) => {
            const linesToWin = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [2, 4, 6],
                [0, 4, 8],
            ];
            let winner = null;
            linesToWin.forEach((item) => {
                const [v1, v2, v3] = item;
                if (state.lines[v1] !== undefined) {
                    console.log("ciao");
                    if (
                        state.lines[v1] === state.lines[v2] &&
                        state.lines[v1] === state.lines[v3]
                    ) {
                        winner = `Vincitore ${!state.userRound ? "X" : "O"}`;
                        return (state.end = true);
                    }
                }
            });

            return winner !== null ? winner : "";
        },
    },
    actions: {
        changeRound() {
            this.userRound = !this.userRound;
        },

        setEndGame() {
            this.end = true;
        },

        reset() {
            this.userRound = true;
            this.end = false;
            this.lines = new Array(9);
        },

        setLines(i, value) {
            this.lines[i] = value;
        },
    },
});
