module.exports = (core, api_c, notes, subscribe_c, brone_c, reviews, quests, quests_m) => {
  let app = core.app;
  let express = core.express;
  app.post('/notes', notes.create);
  app.post('/subscribe', subscribe_c.create);
  app.post('/brones', brone_c.create);
  app.post('/reviews', reviews.create);
  app.get('/notes', notes.findAll);
  app.get('/notes/:noteId', notes.findOne);
  app.put('/notes/:noteId', notes.update);
  app.put('/notes/m_update/:noteId', notes.custom_update);
  app.delete('/notes/:noteId', notes.delete);
  app.post('/quests', quests.create);
  app.get('/questsAll', quests.findAll);
  app.put('/quests/:noteId', quests.update);
  app.put('/quests/m_update/:noteId', quests.custom_update);
  app.delete('/quests/:noteId', quests.delete);
  app.get('/api/:api_data', api_c.quests);
  app.get('/api/*', api_c.quests);
  app.post('/api/*', api_c.quests_create);
}
