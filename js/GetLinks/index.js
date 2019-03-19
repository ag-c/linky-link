module.exports = async function(context, req, documents) {
  context.log('JavaScript HTTP trigger function processed a request.')

  if (documents && documents.length) {
    context.log(`Bundle for ${req.params.vanityUrl} not found.`)

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: documents[0],
    }
  } else {
    context.log(`Bundle for ${req.params.vanityUrl} not found.`)

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: { message: 'No vanity url found' },
    }
  }
}
