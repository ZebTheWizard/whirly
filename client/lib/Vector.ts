export class Vector {
  private x:number
  private y:number
  private z:number
  
  constructor (x:number, y:number, z:number=0) {
    var precision = 0.00001
    this.x = Math.abs(x) < precision ? 0 : x
    this.y = Math.abs(y) < precision ? 0 : y
    this.z = Math.abs(z) < precision ? 0 : z
  }

  mult(scalar:number) {
    this.x *= scalar
    this.y *= scalar
    this.z *= scalar
    return this
  }

  div(scalar:number) {
    this.x /= scalar
    this.y /= scalar
    this.z /= scalar
    return this
  }

  add(vector:Vector) {
    this.x += vector.x
    this.y += vector.y
    this.z += vector.z
    return this
  }

  sub(vector:Vector) {
    this.x -= vector.x
    this.y -= vector.y
    this.z -= vector.z
    return this
  }

  set(vector:Vector) {
    this.x = vector.x
    this.y = vector.y
    this.z = vector.z
    return this
  }

  copy() {
    return new Vector(this.x, this.y, this.z)
  }

  magSq() {
    return (this.x * this.x) + (this.y * this.y )+ (this.z * this.z)
  }
  mag() {
    return Math.sqrt(this.magSq())
  }
  dot(vector: Vector) {
    return (this.x * vector.x) + (this.y * vector.y)
  }
  dist(vector: Vector) {
    return Math.sqrt(
      Math.pow(vector.x - this.x, 2) +
      Math.pow(vector.y - this.y, 2) +
      Math.pow(vector.z - this.z, 2)
    )
  }

  normalize() {
    return this.div(this.mag())
  }

  value(key:string) {
    if (key == 'x') return this.x
    if (key == 'y') return this.y
    if (key == 'z') return this.z
    throw new Error('Invalid vector value')
  }

  limit(scalar:number) {
    if (this.magSq() > scalar * scalar) return this.normalize().mult(scalar)
    else return this
  }

  rotate(angle:number, axis:string="z") {
    if (axis == "z") this.set(new Vector(
          this.x * Math.cos(angle) - this.y * Math.sin(angle),
          this.x * Math.sin(angle) + this.y * Math.cos(angle),
          this.z))
    if (axis == "y") this.set(new Vector(
          this.x * Math.cos(angle) + this.z * Math.sin(angle),
          this.y,
          -this.x * Math.sin(angle) + this.z * Math.cos(angle)))
    if (axis == "x") this.set(new Vector(
          this.x,
          this.y * Math.cos(angle) - this.z * Math.sin(angle),
          this.y * Math.sin(angle) + this.z * Math.cos(angle)))
    return this
  }

  angleBetween(vector:Vector) {
    return Math.atan2(vector.x - this.x, -(vector.y - this.y))
  }

}

window.Vector = Vector
// 1 0 0
// 0 1 0
// -1 0 0
// 0 -1 0