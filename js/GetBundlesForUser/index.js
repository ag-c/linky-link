module.exports = async function(context, req, documents) {
  context.log('JavaScript HTTP trigger function processed a request.')

  if (documents && documents.length) {
    context.log(`Bundle for ${req.params.vanityUrl} not found.`)
    let results = documents.map(document => {
      return {
        userId: document.userId,
        vanityUrl: document.vanityUrl,
        description: document.description,
        linkCount: document.linkCount,
      }
    })
    context.res = {
      body: results,
    }
  } else {
    context.log(`Bundle for ${req.params.vanityUrl} not found.`)
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: { message: 'No vanity url found' },
    }
  }
}
