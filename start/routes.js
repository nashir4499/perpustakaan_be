'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
// Route.get('daftarbuku', ({ view }) => {
//   return view.render('daftarbuku')
// })
Route.get('/buku', 'BukuController.index')
Route.post('/buku', 'BukuController.store')
Route.get('/buku/:id', 'BukuController.show')
Route.post('/buku/:id', 'BukuController.update')
Route.delete('/buku/:id', 'BukuController.delete')

//anggota
Route.get('/anggota', 'AnggotaController.index')
Route.post('/anggota', 'AnggotaController.insert')
Route.get('/anggota/:id', 'AnggotaController.show')
Route.post('/anggota/:id', 'AnggotaController.update')
Route.delete('/anggota/:id', 'AnggotaController.delete')

//pinjam
Route.get('/pinjam', 'PinjamController.index')
Route.post('/pinjam', 'PinjamController.store')
Route.get('/pinjam/:id', 'PinjamController.show')
Route.post('/pinjam/:id', 'PinjamController.update')
Route.delete('/pinjam/:id', 'PinjamController.delete')

Route.get('/pinjamanggota', 'PinjamController.pinjamAnggota')
Route.get('/coba/:id', 'PinjamController.cobapilih')
