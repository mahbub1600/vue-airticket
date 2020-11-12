<template>
  <div class="section-center">
    <div class="container">

        <div class="booking-form">
          <div class="form-header">
            <h1>{{ msg }}</h1>
          </div>
          <form >
            <div class="row">
              <div class="col-md-6">
              <div class="form-group">
                <input id="flyingFrom" name="flyingFrom" class="form-control" type="text" v-on:keyup="myFun($event)">
                <span class="form-label">Flying from</span>
              </div>
              </div>
              <div class="col-md-6">
              <div class="form-group">
                <input id="flyingTo" name="flyingTo" class="form-control" type="text" v-on:keyup="myFun($event)">
                <span class="form-label">Flying to</span>
              </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input id="checkIn" name="checkIn" class="form-control" type="date">
                  <span class="form-label">Check In</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input id="checkOut" name="checkOut" class="form-control" type="date">
                  <span class="form-label">Check Out</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <div class="form-control">
                  <br>
                    <input type="radio" id="economy" name="class" value="economy">
                  <label for="economy">Economy class</label>
                  <input type="radio" id="business" name="class" value="business">
                  <label for="business">Business class</label>
                  <input type="radio" id="first" name="class" value="first">
                  <label for="first">First class</label>
                  </div>
                  <span class="form-label">Travel class</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <div class="value-button decrease" @click="decreaseValue($event)">-</div>
                  <input type="number" id="numberOfAdult" name="numberOfAdult" class="number-type" value="0" />
                  <div class="value-button increase" @click="increaseValue($event)">+</div>
                  <span class="form-label">Adults</span>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <div class="value-button decrease" @click="decreaseValue($event)">-</div>
                  <input type="number" id="numberOfChildren" name="numberOfChildren" class="number-type" value="0" />
                  <div class="value-button increase" @click="increaseValue($event)">+</div>
                  <span class="form-label">Children</span>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <div class="value-button decrease" @click="decreaseValue($event)">-</div>
                  <input type="number" id="numberOfInfant" name="numberOfInfant" class="number-type" value="0" />
                  <div class="value-button increase" @click="increaseValue($event)">+</div>
                  <span class="form-label">Infant</span>
                </div>
              </div>
            </div>
            <div class="form-btn">
              <button type="submit" name="checkAvailability" class="submit-btn">Check availability</button>
            </div>
          </form>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AirTicket',
  data () {
    return {
      msg: 'Welcome to Air Ticketing App',
    }
  },
  methods: {
    increaseValue: function (e) {
      var value = parseInt(e.target.previousElementSibling.value, 10)
      value = isNaN(value) ? 0 : value
      value++
      e.target.previousElementSibling.value = value
    },
    decreaseValue (e) {
      var value = parseInt(e.target.nextElementSibling.value, 10)
      value = isNaN(value) ? 0 : value
      if (value < 1) {
        value = 1
      }
      value--
      e.target.nextElementSibling.value = value
    },
    myFun: function (e) {
      if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 13) {
        return
      }
      const Apc = function (t, e){ var n = this, o = {}, r = "https://www.air-port-codes.com/api/v1/", c; return n = {request: function (e){n[t](e)}, init: function () { for (var t in e) "key" !== t && "secret" !== t && (o[t] = e[t])}, autocomplete: function (t) { o.term=t, n.doAjax() }, multi: function (t) { o.term=t, n.doAjax() }, single: function (t) { o.iata = t, n.doAjax() }, countries: function () { n.doAjax() }, states: function () { n.doAjax() }, doAjax: function () { c.post(r + t, o, function (t) { t = JSON.parse(t), t.status ? n.onSuccess(t) : n.onError(t) }) }}, c = { x: function () { if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest; for (var t = ["MSXML2.XmlHttp.6.0", "MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"], e, n = 0; n < t.length; n++) try { e = new ActiveXObject (t[n]); break } catch (t) {} return e }, send: function (t, n, o, r, i) { void 0 === i && (i =! 0); var a = c.x(); a.open(o, t, i), a.onreadystatechange = function () { 4 == a.readyState && n(a.responseText) }, "POST" === o && (a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.setRequestHeader("APC-Auth", e.key), e.secret && a.setRequestHeader("APC-Auth-Secret", e.secret)), a.send(r) }, post: function (t, e, n, o) { var r = []; for (var i in e)r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i])); c.send(t, n, "POST", r.join("&"), o) }}, n.init(), n}
      // initialize the apc library
      var apcm = new Apc('multi', {
        key: 'ecf51628a9',
        secret: 'f3189318401bd6f',
        limit: 7
      })
      // handle successful response
      apcm.onSuccess = function (data) {
        let inp = data.term
        let arr = data.airports
        let node = e.target
        let currentFocus
        let a, b, i, val = node.value
        closeAllLists()
        if (!val) {
          return false
        }
        currentFocus = -1
        a = document.createElement('DIV')
        a.setAttribute('id', node.id + '-autocomplete-list')
        a.setAttribute('class', 'autocomplete-items')
        node.parentNode.appendChild(a)
        for (i = 0; i < arr.length; i++) {
          let arrVal = arr[i].name
          if (arrVal.substr(0, val.length).toUpperCase() === val.toUpperCase()) {
            b = document.createElement('DIV')
            b.innerHTML = '<strong>' + arrVal.substr(0, val.length) + '</strong>'
            b.innerHTML += arrVal.substr(val.length)
            b.innerHTML += '<input type=\'hidden\' value=\'' + arrVal + '\'>'
            b.addEventListener('click', function (e) {
              node.value = this.getElementsByTagName('input')[0].value
              closeAllLists()
            })
            a.appendChild(b)
          }
        }

        node.addEventListener('keydown', function (evt) {
          var x = document.getElementById(node.id + '-autocomplete-list')
          if (x) x = x.getElementsByTagName('div')
          if (evt.keyCode === 40) {
            // down
            currentFocus++
            addActive(x)
          } else if (evt.keyCode === 38) {
            // up
            currentFocus--
            addActive(x)
          } else if (evt.keyCode === 13) {
            e.preventDefault()
            if (currentFocus > -1) {
              if (x) x[currentFocus].click()
            }
          }
        })

        function addActive (x) {
          if (!x) return false
          removeActive(x)
          if (currentFocus >= x.length) currentFocus = 0
          if (currentFocus < 0) currentFocus = (x.length - 1)
          x[currentFocus].classList.add('autocomplete-active')
        }

        function removeActive (x) {
          for (var i = 0; i < x.length; i++) {
            x[i].classList.remove('autocomplete-active')
          }
        }
        function closeAllLists (elmnt) {
          var x = document.getElementsByClassName('autocomplete-items')
          for (var i = 0; i < x.length; i++) {
            if (elmnt !== x[i] && elmnt !== inp) {
              x[i].parentNode.removeChild(x[i])
            }
          }
        }
        document.addEventListener('click', function (e) {
          closeAllLists(e.target)
        })
      }

      // handle response error
      apcm.onError = function (data) {
        var x = document.getElementsByClassName('autocomplete-items')
        for (var i = 0; i < x.length; i++) {
          x[i].parentNode.removeChild(x[i])
        }
      }

      // makes the request to get the airport data
      apcm.request(e.target.value)
    }
  },
  mounted () {
    // let externalScript = document.createElement('script')
    // externalScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.12/vue.min.js')
    // document.head.appendChild(externalScript)
    // let externalScript = document.createElement('script')
    // externalScript.setAttribute('src', 'https://raw.githubusercontent.com/airportcodes/API-SDK/master/javascript/air-port-codes-api-min.js')
    // document.head.appendChild(externalScript)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .autocomplete {
    position: relative;
    display: inline-block;
  }
  .booking-form {
    padding: 0px 40px 40px;
    max-width: 642px;
    width: 100%;
    margin: auto;
    background: #2d343b;
    position: relative;
  }

  .booking-form .form-header {
    padding: 40px;
    margin: 0px -40px 30px;
    background: #1a1f24;
  }

  .booking-form .form-header h1 {
    font-weight: 700;
    text-transform: capitalize;
    font-size: 38px;
    margin: 0;
    color: #fff;
  }

  .booking-form .form-group {
    position: relative;
    margin-bottom: 30px;
  }
  .form-control:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
  }

  .booking-form .form-control {
    display: block;
    width: 100%;
    font-size: 18px;
    line-height: 1.42857143;
    background-color: #1c2126;
    height: 60px;
    //padding: 7px 20px 0px;
    border: none;
    border-radius: 0px;
    color: #fff;
    position: relative;
  }
  .booking-form select.form-control {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .booking-form .form-label {
    position: absolute;
    top: 15px;
    left: 20px;
    text-transform: uppercase;
    color: #2d343b;
    font-weight: 700;
    line-height: 24px;
    height: 24px;
    font-size: 16px;
    pointer-events: none;
    //-webkit-transition: 0.2s all;
    //transition: 0.2s all;
  }

  .booking-form .form-group .form-label {
    top: -10px;
    color: #fff;
    font-size: 14px;
  }
  .booking-form .submit-btn {
    color: #1c2126;
    background-color: #f7c411;
    font-weight: 700;
    height: 50px;
    border: none;
    padding: 0px 50px;
  }

  .value-button {
    color: #1c2126;
    font-size: 20px;
    display: inline-block;
    border: 1px solid #ddd;
    margin: 0px;
    width: 40px;
    height: 20px;
    text-align: center;
    vertical-align: middle;
    padding: 11px 0;
    background: #eee;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .value-button:hover {
    cursor: pointer;
  }

  form .decrease {
    margin-right: -4px;
    border-radius: 8px 0 0 8px;
  }

  form .increase {
    margin-left: -4px;
    border-radius: 0 8px 8px 0;
  }

  input {
    padding-left: 10px;
  }

  input.number-type {
    text-align: center;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin-top: 10px;
    width: 40px;
    height: 50px;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    margin: 0;
  }
</style>
