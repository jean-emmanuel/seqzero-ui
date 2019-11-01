const Sequencer = require('./src/js/sequencer')

const seq = new Sequencer()
require('./src/js/electron')
global.seq = seq


seq.on('ready', ()=>{

    seq.addColumn(0, {
        patterns: [
            {
                enabled: true,
                length: 192,
                sequences:[
                    {
                        values: {0:0, 96: 1}
                    }
                ]
            }
        ]
    })

    seq.command('play')

    setTimeout(()=>{

        seq.columns[0].patterns[0].disable()
        setTimeout(()=>{

            seq.columns[0].patterns[0].enable()

        }, 1000)

    }, 1000)

})
