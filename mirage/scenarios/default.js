export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('category', 10);
  server.createList('product', 10);
  server.createList('message', 30);
}
