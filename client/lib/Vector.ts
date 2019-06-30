export class Vector {
  private x:number
  private y:number
  private z:number
  
  constructor (x:number, y:number, z:number=0) {
    this.x = x
    this.y = y
    this.z = z
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

  limit(scalar:number) {
    if (this.magSq() > scalar * scalar) return this.normalize().mult(scalar)
    else return this
  }

}
