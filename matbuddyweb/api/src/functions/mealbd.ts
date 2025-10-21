import type { APIGatewayProxyEvent, Context } from 'aws-lambda'

const fetchData = (globalThis as any).fetch as typeof fetch

const response = (statusCode: number, body: unknown) => ({
  statusCode,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*',
  },
  body: JSON.stringify(body),
})

export const handler = async (event: APIGatewayProxyEvent, _context: Context) => {
  try {
    const KEY = process.env.MEALDB_API_KEY || '1'
    const BASE = process.env.MEALDB_BASE || 'https://www.themealdb.com/api/json/v1'

    const qs = event.queryStringParameters ?? {}
    const action = (qs.action || 'random') as
      | 'random' | 'search' | 'lookup'
      | 'filterByIngredient' | 'filterByCategory'
      | 'listCategories' | 'listAreas'

    let url = ''

    switch (action) {
      case 'random':
        url = `${BASE}/${KEY}/random.php`
        break
      case 'search':
        url = `${BASE}/${KEY}/search.php?s=${encodeURIComponent(qs.q ?? '')}`
        break
      case 'lookup':
        url = `${BASE}/${KEY}/lookup.php?i=${encodeURIComponent(qs.id ?? '')}`
        break
      case 'filterByIngredient':
        url = `${BASE}/${KEY}/filter.php?i=${encodeURIComponent(qs.ingredient ?? '')}`
        break
      case 'filterByCategory':
        url = `${BASE}/${KEY}/filter.php?c=${encodeURIComponent(qs.category ?? '')}`
        break
      case 'listCategories':
        url = `${BASE}/${KEY}/list.php?c=list`
        break
      case 'listAreas':
        url = `${BASE}/${KEY}/list.php?a=list`
        break
      default:
        return response(400, { error: 'Ugyldig forespørsel' })
    }

    const res = await fetchData(url)
    const data = await res.json()

    return response(res.status, data)
  } catch (error: any) {
    return response(500, { error: error?.message ?? 'Noe gikk galt' })
  }
}
