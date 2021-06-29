
exports.up = function(knex) {
    return knex.schema.createTable('clucks', table => {
        table.string('username');
        table.blob('imahge');
        table.text('content');
        table.increments('id');
        table.timestamp('created_at').defaultTo(knex.fn.now()); //created_at timestamp defaulted to time now()
    })
  };
  
  exports.down = function(knex) {

  };
  



// Not sure why knex:migrate:latest isn't working...Getting this error down here.

//   error: password authentication failed for user "steven"
//     at Parser.parseErrorMessage (/home/steven/quiz_1/node_modules/pg-protocol/dist/parser.js:287:98)
//     at Parser.handlePacket (/home/steven/quiz_1/node_modules/pg-protocol/dist/parser.js:126:29)
//     at Parser.parse (/home/steven/quiz_1/node_modules/pg-protocol/dist/parser.js:39:38)
//     at Socket.<anonymous> (/home/steven/quiz_1/node_modules/pg-protocol/dist/index.js:11:42)
//     at Socket.emit (events.js:376:20)
//     at addChunk (internal/streams/readable.js:309:12)
//     at readableAddChunk (internal/streams/readable.js:284:9)
//     at Socket.Readable.push (internal/streams/readable.js:223:10)
//     at TCP.onStreamRead (internal/stream_base_commons.js:188:23)
