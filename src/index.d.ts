// Intellisense definitions for Java

/**
 * Representation of Java byte
 */
declare type JavaByte = number;

/**
 * Representation of Java short
 */
declare type JavaShort = number;

/**
 * Representation of Java int
 */
declare type JavaInt = number;

/**
 * Representation of Java long
 */
declare type JavaLong = number;

/**
 * Representation of Java float
 */
declare type JavaFloat = number;

/**
 * Representation of Java double
 */
declare type JavaDouble = number;

/**
 * Representation of Java boolean
 */
declare type JavaBoolean = boolean;

/**
 * Representation of Java char
 */
declare type JavaChar = number;

declare type JavaArray = any;

declare class JavaObject {
  protected clone(): this;
  equals(obj: JavaObject): JavaBoolean;
  protected finalize(): void;
  hashCode(): JavaInt;
  notify(): void;
  notifyAll(): void;
  toString(): JavaStringWrapper;
  wait(timeout?: JavaLong, nanos?: JavaInt);
}

declare class JavaClass<T> extends JavaObject {
  asSubclass<U>(clazz: JavaClass<U>);
  cast(obj: JavaObject): T;
  desiredAssertionStatus(): JavaBoolean;
  getCanonicalName(): JavaStringWrapper;
  getModifiers(): JavaInt;
  getName(): JavaStringWrapper;
  getResourceAsStream(name: JavaStringWrapper): JavaInputStream;
  getSigners(): JavaObject[];
  getSimpleName(): JavaStringWrapper;
  getTypeName(): JavaStringWrapper;
  isAnnotation(): JavaBoolean;
  isAnonymousClass(): JavaBoolean;
  isArray(): JavaBoolean;
  isEnum(): JavaBoolean;
  isInstance(obj: JavaObject): JavaBoolean;
  isInterface(): JavaBoolean;
  isLocalClass(): JavaBoolean;
  isMemberClass(): JavaBoolean;
  isPrimitive(): JavaBoolean;
  isSynthetic(): JavaBoolean;
  newInstance(): T;
  toGenericString(): JavaStringWrapper;
}

/**
 * Representation of Java java.io.InputStream
 */
declare class JavaInputStream extends JavaObject {
  available(): JavaInt;
  close(): void;
  mark(readlimit: JavaInt): void;
  markSupported(): JavaBoolean;
  read(b: JavaByte[]);
  read(b: JavaByte[], off: JavaInt, len: JavaInt): JavaInt;
  readAllBytes(): JavaByte[];
  readNBytes(b: JavaByte, off: JavaInt, len: JavaInt): JavaInt;
  reset(): void;
  skip(n: JavaLong): JavaLong;
  transferTo(out: JavaOutputStream): JavaLong;
}

declare class JavaOutputStream extends JavaObject {
  close(): void;
  flush(): void;
  write(b): void;
  write(b: JavaByte[], off: JavaInt, len: JavaInt): void;
}

declare class JavaStringWrapper extends JavaObject {
  constructor();
  constructor(bytes: JavaByte);
  constructor(bytes: JavaByte[], offset: JavaInt, length: JavaInt);
  constructor(value: JavaChar);
  constructor(value: JavaChar, offset: JavaInt, count: JavaInt);
  constructor(codePoints: JavaInt[], offset: JavaInt, count: JavaInt);
  constructor(original: JavaStringWrapper);
  charAt(index: JavaInt): JavaChar;
  codePointAt(index: JavaInt): JavaInt;
  codePointBefore(index: JavaInt): JavaInt;
  codePointCount(beginIndex: JavaInt, endIndex: JavaInt): JavaInt;
  compareTo(anotherString: JavaStringWrapper): JavaInt;
  compareToIgnoreCase(str: JavaStringWrapper): JavaInt;
  concat(str: JavaStringWrapper): JavaStringWrapper;
  contains(s: JavaCharSequence): JavaBoolean;
  contentEquals(cs: JavaCharSequence): JavaBoolean;
  static copyValueOf(
    data: JavaChar[],
    offset?: JavaInt,
    count?: JavaInt
  ): JavaStringWrapper;
  endsWith(suffix: JavaStringWrapper): JavaBoolean;
  equalsIgnoreCase(anotherString: JavaStringWrapper): JavaBoolean;
  static format(format: JavaStringWrapper, ...args: JavaObject[]);
  getBytes(charsetName?: JavaStringWrapper): JavaByte[];
  getChars(
    srcBegin: JavaInt,
    srcEnd: JavaInt,
    dst: JavaCharSequence[],
    dstBegin: JavaInt
  ): void;
  indexOf(ch: JavaInt, fromIndex?: JavaInt): JavaInt;
  indexOf(str: JavaStringWrapper, fromIndex?: JavaInt): JavaInt;
  intern(): JavaStringWrapper;
  isEmpty(): JavaBoolean;
  lastIndexOf(ch: JavaInt, fromIndex?: JavaInt): JavaInt;
  lastIndexOf(str: JavaStringWrapper, fromIndex?: JavaInt): JavaInt;
  length(): JavaInt;
  matches(regex: JavaStringWrapper): JavaBoolean;
  offsetByCodePoints(index: JavaInt, codePointOffset: JavaInt): JavaInt;
  regionMatches(
    ignoreCase: JavaBoolean,
    toffset: JavaInt,
    other: JavaStringWrapper,
    ooffset: JavaInt,
    len: JavaInt
  ): JavaBoolean;
  replace(oldChar: JavaChar, newChar: JavaChar): JavaStringWrapper;
  replace(
    target: JavaCharSequence,
    replacement: JavaCharSequence
  ): JavaStringWrapper;
  replaceFirst(
    regex: JavaStringWrapper,
    replacement: JavaStringWrapper
  ): JavaStringWrapper;
  replaceAll(
    regex: JavaStringWrapper,
    replacement: JavaStringWrapper
  ): JavaStringWrapper;
  split(regex: JavaStringWrapper, limit?: JavaInt): JavaStringWrapper[];
  startsWith(prefix: JavaStringWrapper, toffset: JavaInt): JavaBoolean;
  subSequence(beginIndex: JavaInt, endIndex: JavaInt): JavaCharSequence;
  substring(beginIndex: JavaInt): JavaStringWrapper;
  substring(beginIndex: JavaInt, endIndex: JavaInt): JavaStringWrapper;
  toCharArray(): JavaChar[];
  toLowerCase(): JavaStringWrapper;
  toUpperCase(): JavaStringWrapper;
  trim(): JavaStringWrapper;
  static valueOf(b: JavaBoolean): JavaStringWrapper;
  static valueOf(c: JavaChar): JavaStringWrapper;
  static valueOf(
    data: JavaChar[],
    offset?: JavaInt,
    count?: JavaInt
  ): JavaStringWrapper;
  static valueOf(i: JavaInt): JavaStringWrapper;
  static valueOf(o: JavaObject): JavaStringWrapper;
}

declare abstract class JavaNumber extends JavaObject {
  byteValue(): JavaByte;
  doubleValue(): JavaDouble;
  floatValue(): JavaFloat;
  intValue(): JavaInt;
  longValue(): JavaLong;
  shortValue(): JavaShort;
}

declare class JavaIntegerWrapper extends JavaNumber {
  static MAX_VALUE: JavaInt;
  static MIN_VALUE: JavaInt;
  static SIZE: JavaInt;
  static bitCount(i: JavaInt): JavaInt;
  static compare(x: JavaInt, y: JavaInt): JavaInt;
  compareTo(anotherInteger: JavaIntegerWrapper): JavaInt;
  static compareUnsigned(x: JavaInt, y: JavaInt): JavaInt;
  static decode(nm: JavaStringWrapper): JavaIntegerWrapper;
  static divideUnsigned(dividend: JavaInt, divisor: JavaInt): JavaInt;
  static getInteger(
    nm: JavaStringWrapper,
    val?: JavaInt | JavaIntegerWrapper
  ): JavaIntegerWrapper;
  static hashCode(value: JavaInt): JavaInt;
  static highestOneBit(i: JavaInt): JavaInt;
  static lowestOneBit(i: JavaInt): JavaInt;
  static max(a: JavaInt, b: JavaInt): JavaInt;
  static min(a: JavaInt, b: JavaInt): JavaInt;
  static numberOfLeadingZeros(i: JavaInt): JavaInt;
  static numberOfTrailingZeros(i: JavaInt): JavaInt;
  static parseInt(
    s: JavaCharSequence,
    beginIndex: JavaInt,
    endIndex: JavaInt,
    radix: JavaInt
  ): JavaInt;
  static parseInt(s: JavaStringWrapper, radix?: JavaInt): JavaInt;
  static parseUnsignedInt(
    s: JavaCharSequence,
    beginIndex: JavaInt,
    endIndex: JavaInt,
    radix: JavaInt
  ): JavaInt;
  static parseUnsignedInt(s: JavaStringWrapper, radix?: JavaInt): JavaInt;
  static remainderUnsigned(dividend: JavaInt, divisor: JavaInt): JavaInt;
  static reverse(i: JavaInt): JavaInt;
  static reverseBytes(i: JavaInt): JavaInt;
  static rotateLeft(i: JavaInt, distance: JavaInt): JavaInt;
  static rotateRight(i: JavaInt, distance: JavaInt): JavaInt;
  static signum(i: JavaInt): JavaInt;
  static sum(a: JavaInt, b: JavaInt): JavaInt;
  static toBinaryString(i: JavaInt): JavaStringWrapper;
  static toHexString(i: JavaInt): JavaStringWrapper;
  static toOctalString(i: JavaInt): JavaStringWrapper;
  static toString(i: JavaInt, radix?: JavaInt): JavaStringWrapper;
  static toUnsignedLong(x: JavaInt): JavaLong;
  static toUnsignedString(i: JavaInt, radix?: JavaInt): JavaStringWrapper;
  static valueOf(i: JavaInt): JavaIntegerWrapper;
  static valueOf(s: JavaStringWrapper, radix?: JavaInt): JavaIntegerWrapper;
}

declare class JavaByteWrapper extends JavaNumber {
  constructor(value: JavaByte);
  constructor(s: JavaStringWrapper);
  static BYTES: JavaInt;
  static MAX_VALUE: JavaByte;
  static MIN_VALUE: JavaByte;
  static SIZE: JavaInt;
  static compare(x: JavaByte, y: JavaByte): JavaInt;
  compareTo(anotherByte: JavaByteWrapper): JavaInt;
  static decode(nm: JavaStringWrapper): JavaByteWrapper;
  static hashCode(value: JavaByte): JavaInt;
  static parseByte(s: JavaStringWrapper, radix?: JavaInt): JavaByte;
  static toString(b: JavaByte): JavaStringWrapper;
  static toUnsignedInt(x: JavaByte): JavaInt;
  static toUnsignedLong(x: JavaByte): JavaLong;
  static valueOf(b: JavaByte): JavaByteWrapper;
  static valueOf(s: JavaStringWrapper, radix: JavaInt): JavaByteWrapper;
}

/**
 * Representation of Java JavaBoolean
 */
declare class JavaBooleanWrapper extends JavaObject {
  constructor(value: JavaBoolean);
  constructor(s: JavaStringWrapper);
  booleanValue(): JavaBoolean;
  static compare(x: JavaBoolean, y: JavaBoolean): JavaInt;
  compareTo(b: JavaBooleanWrapper): JavaInt;
  static getBoolean(name: JavaStringWrapper): JavaBoolean;
  static logicalAnd(a: JavaBoolean, b: JavaBoolean): JavaBoolean;
  static logicalOr(a: JavaBoolean, b: JavaBoolean): JavaBoolean;
  static logicalXor(a: JavaBoolean, b: JavaBoolean): JavaBoolean;
  static parseBoolean(s: JavaStringWrapper): JavaBoolean;
  static valueOf(b: JavaBoolean): JavaBooleanWrapper;
  static valueOf(s: JavaStringWrapper): JavaBooleanWrapper;
}

declare class JavaCharSequence {
  charAt(index: JavaInt): JavaChar;
  length(): JavaInt;
  subSequence(start: JavaInt, end: JavaInt): JavaCharSequence;
  toString(): JavaStringWrapper;
}

// Intellisense definitions for Inspire Scaler

declare type ScString = string & JavaStringWrapper;
declare type ScBoolean = boolean & JavaBoolean;
declare type ScInteger = number & JavaIntegerWrapper;

declare type ScObject = ScMap<any>;

declare type ScMap<T> = {
  [key: string]: T;
};

/**
 * JavaScript object, values must be of primitive type (string, number, JavaBoolean) or array of primitive types.
 */
declare type ScSqlParametersObject =
  | ScString
  | number
  | ScBoolean
  | (ScString | number | ScBoolean)[];

/**
 * Represents the information about a file/directory.
 */
declare type ScFileInfo = {
  /**
   * Name of the file/directory
   */
  name: ScString;
  /**
   * Indicator of the object being a directory.
   */
  isDirectory: ScBoolean;
  /**
   * Indicator of the object being a symbolic link.
   */
  isSymbolicLink: ScBoolean;
  /**
   * Size of the file in bytes.
   */
  size: JavaLong;
  /**
   * The file's creation timestamp (in milliseconds).
   */
  createdTime: JavaLong;
  /**
   * The file's modification timestamp (in milliseconds).
   */
  modifiedTime: JavaLong;
  json: ScString;
};

/**
 * Represents the information about a Scaler job.
 */
declare type ScJobInfo = {
  /**
   * ID of the job
   */
  id: ScString;
  /**
   * Status of the job (Processing, Held, Canceling, Completed, Failed, Canceled).
   */
  status: ScJobStatus;
  /**
   * Indicator that the job is still being processed (Processing, Held, Canceling).
   */
  isProcessing: ScBoolean;
  /**
   * Indicator that the job is no longer being processed (Completed, Failed, Canceled).
   */
  isFinished: ScBoolean;
  /**
   * Name of the job's workflow.
   */
  workflowName: ScString;
  workflowPath: ScString;
  /**
   * ICM location of the job's workflow.
   */
  workflowLocation: ScString;
  /**
   * Group of job's workflow (ONLINE, BATCH, SYSTEM).
   */
  workflowGroup: ScString;
  /**
   * The job's start timestamp (in milliseconds).
   */
  startTime: JavaLong;
  /**
   * The job's end timestamp (in milliseconds) or null if it still being processed.
   */
  endTime?: JavaLong;
  /**
   * Path to the job's directory or null if not used yet.
   */
  jobDir?: ScString;
  /**
   * This property always returns false because it relates to functionality that is no longer available.
   */
  usesBackup: ScBoolean;
  /**
   * ID of the node that is currently processing the job (or where job finished processing).
   */
  processingNodeId: JavaShort;
  /**
   * ID of the cluster that is currently processing the job (or where job finished processing).
   */
  processingClusterId: JavaByteWrapper;
  /**
   * Name of the cluster that is currently processing the job (or where job finished processing).
   */
  processingClusterName: ScString;
};

/**
 * Status of the job (Processing, Held, Canceling, Completed, Failed, Canceled).
 */
declare enum ScJobStatus {
  Processing = "Processing",
  Held = "Held",
  Canceling = "Canceling",
  Canceled = "Canceled",
  Completed = "Completed",
  Failed = "Failed",
}

/**
 * Represents the response of an Inspire Production Server RUNW command.
 */
declare type ScRunwResponse = {
  /**
   * Status of the RUNW command (PREPROCESSING, WORKING, FINISHED, FAILED, ABORTING, ABORTED, PAUSING, PAUSED, STOPPING, STOPPED, SCHEDULED, UNKNOWN).
   */
  status: ScRunwStatus;
  /**
   * Indicator that RUNW command failed (status is FAILED or errorsCount > 0).
   */
  isFailed: ScBoolean;
  /**
   * Number of run warnings.
   */
  warningsCount: number;
  /**
   * Number of run errors.
   */
  errorsCount: number;
  /**
   * Identifier of the server where you ran the RUNW command.
   */
  ipsId: ScString;
  /**
   * Identifier of the Inspire Production Server job.
   */
  ipsJobId?: ScString;
  /**
   * Log from the Inspire Production Server run.
   */
  ipsLog: ScString;
  json: ScString;
};

declare enum ScRunwStatus {
  Preprocessing = "PREPROCESSING",
  Working = "WORKING",
  Finished = "FINISHED",
  Failed = "FAILED",
  Aborting = "ABORTING",
  Aborted = "ABORTED",
  Pausing = "PAUSING",
  Paused = "PAUSED",
  Stopping = "STOPPING",
  Stopped = "STOPPED",
  Scheduled = "SCHEDULED",
  Unknown = "UNKNOWN",
}

/**
 * Represents the response of an HTTP request.
 */
declare type ScHttpResponse = {
  /**
   * HTTP status code.
   */
  statusCode: number;
  headers: ScHttpHeader[];
  /**
   * HTTP response body (payload).
   */
  body: any;
  json: ScString;
};

/**
 * Represents the headers of an HTTP request.
 */
declare type ScHttpHeaders = {
  [headerName: string]: string | JavaStringWrapper;
};

/**
 * Represents the header of an HTTP response.
 */
declare type ScHttpHeader = {
  name: ScString;
  value: ScString;
};

/**
 * Result of an SQL query command containing an array of JavaScript objects consisting of the values of each row.
 */
declare type ScSqlResultObjects = {
  /**
   * Java array of row objects (column values).
   */
  objects: ScMap<ScString>[];
  /**
   * Flags the existence of additional rows in the results. By default, it is limited to 500 rows.
   */
  hasMore: ScBoolean;
  /**
   * Size of rows array.
   */
  size: number;
  /**
   * Length of rows array.
   */
  length: number;
  json: ScString;
};

/**
 * Result of an SQL query command containing an array of Java native objects consisting of the values of each row.
 */
declare type ScSqlResultNativeObjects = {
  /**
   * Java array of row objects (column values).
   */
  objects: ScObject[];
  /**
   * Flags the existence of additional rows in the results. By default, it is limited to 500 rows.
   */
  hasMore: ScBoolean;
  /**
   * Size of rows array.
   */
  size: number;
  /**
   * Length of rows array.
   */
  length: number;
  json: ScString;
};

/**
 * Result of an SQL query command containing an array of string arrays consisting of the values of each row.
 */
declare type ScSqlResult = {
  /**
   * Java array of row arrays (column values).
   */
  rows: ScString[][];
  /**
   * Flags the existence of additional rows in the results. By default, it is limited to 500 rows.
   */
  hasMore: ScBoolean;
  /**
   * Size of rows array.
   */
  size: number;
  /**
   * Length of rows array.
   */
  length: number;
  json: ScString;
};

/**
 * Response of an Inspire Interactive request.
 */
declare type ScInteractiveResponse = {
  /**
   * Returns the request's status.
   */
  status: ScString;
  /**
   * Object with the content of Inspire Interactive response body. If the request fails, body is null.The property type (subtree or array) returned in this body depends on the number of returned objects.
   */
  body: ScObject;
  /**
   * Indicates whether the request has been successful.
   */
  isSuccess: ScBoolean;
  /**
   * Returns the request's error message if the request fails; otherwise this contains an empty string.
   */
  errorMessage: ScString;
};

/**
 * Error details useful during error handling script.
 */
declare type ScJobErrorDetail = {
  /**
   * Error message.
   */
  message?: ScString;
  /**
   * Name of the module in which the error occurred.
   */
  moduleName?: ScString;
  /**
   * Returns the type of module in which the error occurred.
   */
  moduleType?: ScString;
};

/**
 * Represents the information about a Scaler workflow.
 */
declare type ScWorkflow = {
  /**
   * Name of workflow.
   */
  name: ScString;
  path: ScString;
  /**
   * Version marked for deploy, null if no version is marked for deploy.
   */
  versionToDeploy?: number;
  /**
   * Last version of workflow present in ICM.
   */
  lastVersion?: number;
  /**
   * The possible workflow status values include: DEPLOYED and UNDEPLOYED.
   */
  status: ScWorkflowStatus;
  /**
   * Group of workflow.
   */
  workflowGroup: ScString;
};

declare enum ScWorkflowStatus {
  Deployed = "DEPLOYED",
  Undeployed = "UNDEPLOYED",
}

/**
 * Provides information about an Inspire Scaler environment variable.
 */
declare type ScEnvironmentVariable = {
  /**
   * Name of environment variable.
   */
  name: ScString;
  /**
   * Value of environment variable.
   */
  value: ScString;
  /**
   * Type of environment variable.
   */
  type: ScEnvironmentVariableType;
};

/**
 * Provides information about type of an Inspire Scaler environment variable.
 */
declare enum ScEnvironmentVariableType {
  String = "String",
  Password = "Password",
}

declare type ScVariableReference = {
  /**
   * Accesses an ScVariableSubtreeReference field and returns an item at a given index.
   */
  get(index: number | ScInteger): ScVariableSubtreeReference;
  forEach(action: (element: ScVariableSubtreeReference) => void): void;
  /**
   * The number of items in the array (Java practice).
   */
  size: ScInteger;
  /**
   * The number of items in the array (JavaScript practice).
   */
  length: ScInteger;
};

declare type ScVariableSubtreeReference = {
  /**
   * Gets the value of a given String variable within the context of a Subtree variable. The read value is stored within the memory, therefore it is recommended to use this function for small values (e.g. a few MB). For larger files, you should use getvarStream instead.
   */
  getvar(name: string | JavaStringWrapper): ScString;
  /**
   * Sets the value of a given String variable within the context of a parent Subtree variable. The set value can be used by any subsequent workflow module. When setting large data, you should use setvarStream instead.
   */
  setvar(
    name: string | JavaStringWrapper,
    value: string | JavaStringWrapper
  ): void;
  /**
   * Gets the value of a given variable as a Subtree (JavaScript object) within the context of a parent Subtree variable.The read value is stored within the memory, therefore it is recommended to use this function for small values (e.g. a few MB).
   */
  getvarSubtree(name: string | JavaStringWrapper): ScObject;
  /**
   * Gets the value of a given variable as a stream of bytes within the context of a Subtree variable. The value is not read but it references an input stream that should be consumed by other stream-based functions (e.g. fs.writeStream). You should always close the stream when you are finished with it.
   */
  getvarStream(name: string | JavaStringWrapper): JavaInputStream;
  /**
   * Sets the value of a given job variable using the InputStream Java class within the context of a Subtree variable. The set value can be used by any subsequent workflow module.
   */
  setvarStream(name: string | JavaStringWrapper, value: JavaInputStream): void;
  /**
   * Gets the value of a given variable as ByteArray within the context of a Subtree variable. The value is not read but it references a ByteArray.
   */
  getvarBytes(name: string | JavaStringWrapper): JavaByte[];
  /**
   * Sets the value of a given job variable using the ByteArray Java class within the context of a Subtree variable. The set value can be used by any subsequent workflow module.
   */
  setvarBytes(name: string | JavaStringWrapper, value: JavaByte[]): void;
};

/**
 * Provides information about an ICM file or folder
 */
declare type ScIcmFileInfo = {
  /**
   * Name of the file or directory.
   */
  name: ScString;
  /**
   * Location of the file/folder on ICM server.
   */
  path: ScString;
  /**
   * Is true if the item is a directory.
   */
  isIsDirectory: ScBoolean;
  /**
   * File size in bytes.
   */
  size: JavaLong;
  /**
   * Time (in milliseconds) when the item was modified.
   */
  modifyTime: JavaLong;
  /**
   * Time (in milliseconds) when the item was created.
   */
  createTime: JavaLong;
  /**
   * Latest file version.
   */
  version: number;
  /**
   * Current file approval state.
   */
  state: ScString;
  /**
   * Item metadata
   */
  metadata: ScObject;
};

/**
 * Provides information about each version of a file.
 */
declare type ScIcmFileHistory = {
  /**
   * File version.
   */
  fileVersion: number;
  /**
   * Is true if the version is a deleted version of the file.
   */
  deleted: ScBoolean;
  /**
   * Size of the given file version.
   */
  size: JavaLong;
  /**
   * Comment made on the file version at check-in or check-out.
   */
  comment: ScString;
  /**
   * Branch name of the file version.
   */
  branch: ScString;
  /**
   * All labels of the file version.
   */
  labels: ScString[];
  /**
   * User who created the file version.
   */
  username: ScString;
  /**
   * Time/date the file version was created.
   */
  dateTime: JavaLong;
  /**
   * List of approval states.
   */
  approvalStateInfos: ScIcmVersionApprovalStateInfo[];
};

/**
 * Provides information about approval states.
 */
declare type ScIcmVersionApprovalStateInfo = {
  /**
   * Approval state name.
   */
  name: ScString;
  /**
   * Username linked to the approval state change.
   */
  user: ScString;
  /**
   * Date and time (in miliseconds) when the approval state was created.
   */
  changed: JavaLong;
  /**
   * Date the approval state was established.
   */
  from: JavaLong;
  /**
   * Date the approval state expired.
   */
  to: JavaLong;
  /**
   * Comment made at the approval state change.
   */
  comment: ScString;
};

/**
 * An object that allows you to log messages using Scaler's logging framework.
 */
declare type ScServerLogger = {
  /**
   * Logs a given message with the logging method set to INFO.
   */
  info: (message: string | JavaStringWrapper) => void;
  /**
   * Logs a given message with the logging method set to WARN.
   */
  warn: (message: string | JavaStringWrapper) => void;
  /**
   * Logs a given message with the logging method set to DEBUG.
   */
  debug: (message: string | JavaStringWrapper) => void;
  /**
   * Logs a given message with the logging method set to TRACE.
   */
  trace: (message: string | JavaStringWrapper) => void;
  /**
   * Logs a given message with the logging method set to ERROR.
   */
  error: (message: string | JavaStringWrapper) => void;
};

/**
 * An object for working with a specific access token.
 */
declare type ScAccessToken = {
  /**
   * Returns the value of the given access token.
   */
  value: ScString;
  /**
   * Returns the domain that was defined for the given access token via the 'Issued for' setting in the token's Scaler configuration.
   */
  issuedFor: ScString;
}

/**
 * Gets the value of a given variable as a String. The read value is stored within the memory thus it is recommended to use this declare function for small values (up to a few MB). For larger files, you should use getvarStream instead. The variable you are getting must be defined in Custom Variable Manager and be initialized.
 */
declare function getvar(name: string | JavaStringWrapper): ScString;

/**
 * Gets the value of a given variable as a Byte Array. The read value is stored within the memory thus it is recommended to use this declare function for small values (up to a few MB). For larger files, you should use getvarStream instead. The variable you are getting must be defined in Custom Variable Manager and be initialized.
 */
declare function getvarBytes(name: string | JavaStringWrapper): JavaByte[];

/**
 * Gets the value of a given variable as a Byte Stream. The value is not read but it references an input stream that should be consumed by other stream-based functions (e.g. fs.writeStream). Keep in mind that you should always close the stream when you are finished with it. The variable you are getting must be defined in Custom Variable Manager and be initialized.
 */
declare function getvarStream(
  name: string | JavaStringWrapper
): JavaInputStream;

/**
 * Gets the value of a given variable as an Array (JavaScript Array). The read value is stored within the memory thus it is recommended to use this declare function for small values (up to a few MB). For larger files, you should use getvarArrayReferences() instead. The variable you are getting must be defined in Custom Variable Manager and be initialized. If you intend to serialize (convert to String) a field from the returned Array, you should use the toString() method of this field. The Array.isArray() JavaScript method  is working incorrectly with nested Arrays. The elements of the Array you wish to get are of the Subtree type (JavaScript Object).
 */
declare function getvarArray(name: string | JavaStringWrapper): ScObject[];

/**
 * Gets the value of a given variable as a Subtree (JavaScript Object). The read value is stored within the memory thus it is recommended to use this declare function for small values (up to a few MB). If you intend to serialize (convert to String) the returned object, you should use the toString() method of this object. The variable you are getting must be defined in Custom Variable Manager and be initialized.
 */
declare function getvarSubtree(name: string | JavaStringWrapper): ScObject;

/**
 * Sets the value of a given job variable as a String. The variable must be defined in Custom Variable Manager.
 */
declare function setvar(
  name: string | JavaStringWrapper,
  value: string | JavaStringWrapper
): void;

/**
 * Sets the value of a given job variable as an Array (JavaScript Array). The variable must be defined in Custom Variable Manager. The elements of the Array you wish to set must be of the Subtree type (JavaScript Object).
 */
declare function setvarArray(
  name: string | JavaStringWrapper,
  value: ScObject
): void;

/**
 * Sets the value of a given job variable as a Subtree (JavaScript Object). The variable must be defined in Custom Variable Manager.
 */
declare function setvarSubtree(
  name: string | JavaStringWrapper,
  value: ScObject
): void;

/**
 * Checks whether a variable with a given name exists. The method returns the true value if: The variable you are checking is of the System, Inspire Environment or Environment type. The custom variable you are checking is defined in Custom Variable Manager and is initialized.
 */
declare function isvar(name: string | JavaStringWrapper): ScBoolean;

/**
 * Gets the reference of a given variable as an Array of references (Java Array). It is recommended to use this declare function to access values within an Array of large data or data of a potentially unlimited size. The accessed array variable must be defined in Custom Variable Manager and must be initialized. The returned Java Array cannot be verified by the Array.isArray() JavaScript method (it returns false). The elements of the array you wish to get are of the SubtreeReference type.
 */
declare function getvarArrayReferences(
  name: string | JavaStringWrapper
): ScVariableReference[];

/**
 * Sets the value of a given job variable using the InputStream Java class. The set variable's value can be used by any subsequent workflow module. The variable must be defined in Custom Variable Manager.
 */
declare function setvarStream(
  name: string | JavaStringWrapper,
  value: JavaInputStream
): void;

/**
 * Sets the value of a given job variable using the ByteArray Java class. The set value can be used by any subsequent workflow module. The variable must be defined in Custom Variable Manager.
 */
declare function setvarBytes(
  name: string | JavaStringWrapper,
  value: JavaByte[]
): void;

/**
 * Gets the name of the Script module that calls this function.
 */
declare function getScriptModuleName(): ScString;

/**
 * API for Base64 encoding/decoding.
 */
declare class base64 {
  /**
   * Encodes a given byte array into a Base64 string.
   */
  static encode(bytes: JavaByte[]): ScString;

  /**
   * Encodes a given text into a Base64 string.
   */
  static encodeText(text: string | JavaStringWrapper): ScString;

  /**
   * Decodes a given Base64 string into a byte array.
   */
  static decode(base64: string | JavaStringWrapper): JavaByte[];
}

/**
 * This chapter lists the API methods related to working with Cluster solutions.
 */
declare class cluster {
  /**
   * This method can only be invoked from within the System Processes workflows. It gets the current size of the cluster.
   */
  static getCurrentSize(): JavaByteWrapper;

  /**
   * This method can only be invoked from within the System Processes workflows. It partially automates the scaling process by setting the expected number of nodes in the cluster. More than 50% of these nodes must be running for Inspire Scaler to operate fully. If the number of nodes is lower than 1 or higher than 99, the job fails. You can only decrease this number by one at a time. As the incorrect usage of this method may cause your cluster to malfunction, it is recommended to prevent unauthorized users from using the workflows in which the method is used. Do this by selecting an appropriate API authentication group in the HTTP Input module.
   */
  static setExpectedClusterSize(expectedClusterSize: JavaByteWrapper): void;
}

/**
 * API used for sending emails. It is available only when working with a configured SMTP server.
 */
declare class email {
  /**
   * Sends an email notification to the selected recipient. SMTP server should be enabled in the configuration.
   */
  static send(
    senderAddress: string | JavaStringWrapper,
    receiverAddress: string | JavaStringWrapper,
    subject: string | JavaStringWrapper,
    text: string | JavaStringWrapper
  ): void;
}

/**
 * This chapter lists the API methods related to environment variables.
 */
declare class env {
  /**
   * This method can only be invoked from within the System Processes workflows and when the cluster quorum is healthy. Otherwise, the job fails which includes invoking the method using a Test Job. It creates a new Environment variable. It returns true if the variable is successfully created. Otherwise, it returns false.
   */
  static create(
    name: string | JavaStringWrapper,
    value: string | JavaStringWrapper,
    type?: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * This method can only be invoked from within the System Processes workflows and when the cluster quorum is healthy. Otherwise, the job fails which includes invoking the method using a Test Job. It updates the value of a given Environment variable. It returns true if the variable is successfully updated. Otherwise, it returns false. You are unable to update the value of an Environment variable if the given variable is being used by a deployed workflow.
   */
  static updateValue(
    name: string | JavaStringWrapper,
    value: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * This method can only be invoked from within the System Processes workflows and when the cluster quorum is healthy. Otherwise, the job fails which includes invoking the method using a Test Job. It updates the value and type of a given Environment variable. The available types include: String and Password. It returns true if the variable is successfully updated, otherwise it returns false. You are unable to update the value of an Environment variable if the given variable is being used by a deployed workflow.
   */
  static updateValueAndType(
    name: string | JavaStringWrapper,
    value: string | JavaStringWrapper,
    type: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * This method can only be invoked from within the System Processes workflows and when the cluster quorum is healthy. Otherwise, the job fails which includes invoking the method using a Test Job. It deletes a given Environment variable. It returns true if the variable is successfully deleted. It also returns true if you try to delete a non-existent variable with the script log notifying you about this fact. In other cases, it returns false. You are unable to update the value of an Environment variable if the given variable is being used by a deployed workflow.
   */
  static delete(name: string | JavaStringWrapper): ScBoolean;

  /**
   * This method can only be invoked from within the System Processes workflows and when the cluster quorum is healthy. Otherwise, the job fails. It returns an Array of workflow names in which the given Environment variable is used. When using this method in iterations, consider using the getUsages method for a better performance.
   */
  static getUsage(envVar: string | JavaStringWrapper): ScString[];

  /**
   * This method can only be invoked from within the System Processes workflows and when the cluster quorum is healthy. Otherwise, the job fails. It returns a map in which the given Environment variables are used as keys, and their values are the Arrays of workflow names in which the given Environment variable is used. This method provides a better performance than the getUsage method when iterating.
   */
  static getUsages(envVars: string | JavaStringWrapper[]): ScObject;

  /**
   * This method can only be invoked from within the System Processes workflows. It lists all the Environment variables that exist in Inspire Scaler.
   */
  static list(): ScEnvironmentVariable[];
}

/**
 * API used when working with the file-system.
 */
declare class fs {
  /**
   * Returns the path separator (e.g. slash for UNIX, backslash for WIN, etc.) of an operation-system specific file.
   */
  static separator(): ScString;

  /**
   * Returns a JVM specific temporary directory. Typically, it returns a temporary directory of an underlying operating system (e.g. /tmp).
   */
  static temp(): ScString;

  /**
   * Checks whether a file/directory in the given path exists or not.
   */
  static exists(path: string | JavaStringWrapper): ScBoolean;

  /**
   * Checks whether a file (not directory) exists in the given path.
   */
  static isFile(path: string | JavaStringWrapper): ScBoolean;

  /**
   * Checks whether a directory (not file) exists in the given path.
   */
  static isDirectory(path: string | JavaStringWrapper): ScBoolean;

  /**
   * Checks that a file exists and that Inspire Scaler has appropriate privileges that would allow it open the file for reading.
   */
  static canRead(path: string | JavaStringWrapper): ScBoolean;

  /**
   * Checks that a file exists and that Inspire Scaler has appropriate privileges that would allow it open the file for writing.
   */
  static canWrite(path: string | JavaStringWrapper): ScBoolean;

  /**
   * Retrieves the basic information about a file/directory in the given path.
   */
  static info(path: string | JavaStringWrapper): ScFileInfo;

  /**
   * Retrieves the names of the files/sub-directories from the directory in the given path. Returns Java array.
   */
  static listNames(path: string | JavaStringWrapper): ScString[];

  /**
   * Retrieves the information about the files/sub-directories from the directory in the given path. Returns Java array.
   */
  static list(path: string | JavaStringWrapper): ScFileInfo[];

  /**
   * Reads the contents of a file in the given path. This method reads all of the file's contents into the memory, which is limited to 2 GB of data. If you wish to read larger files, you should use the fs.readLines method or other methods instead.
   */
  static read(path: string | JavaStringWrapper): JavaByte[];

  /**
   * Line by line, it reads the contents of a file in the given path and passes the lines to a given function. This declare function is useful if you want to work with large files that may not fit into the memory.
   */
  static readLines(
    path: string | JavaStringWrapper,
    lineFunction: (line: ScString) => void
  ): void;

  /**
   * Writes the given string into a file in the given path, optionally using custom encoding.
   */
  static write(
    path: string | JavaStringWrapper,
    data: string | JavaStringWrapper,
    encoding?: string | JavaStringWrapper
  ): void;

  /**
   * Writes a given byte array into a file.
   */
  static writeBytes(path: string | JavaStringWrapper, data: JavaByte[]): void;

  /**
   * Writes data from a given input stream into a file in the given path.
   */
  static writeStream(
    path: string | JavaStringWrapper,
    stream: JavaInputStream
  ): void;

  /**
   * Adds a given string to the end of a file in the given path, optionally using custom encoding (defaults to UTF-8).
   */
  static append(
    path: string | JavaStringWrapper,
    data: string | JavaStringWrapper,
    encoding?: string | JavaStringWrapper
  ): void;

  /**
   * Adds a given byte array to the end of a file.
   */
  static appendBytes(path: string | JavaStringWrapper, data: JavaByte[]): void;

  /**
   * Deletes a single file or even a non-empty directory depending on whether you are deleting recursively.
   */
  static delete(
    path: string | JavaStringWrapper,
    isRecursively?: boolean | JavaBoolean
  ): ScBoolean;

  /**
   * Copies a given source to a given target. It involves files as well as complete directories.
   */
  static copy(
    srcPath: string | JavaStringWrapper,
    targetPath: string | JavaStringWrapper
  ): void;

  /**
   * Moves a given source to a given target. It involves files as well as complete directories.
   */
  static move(
    srcPath: string | JavaStringWrapper,
    targetPath: string | JavaStringWrapper
  ): void;

  /**
   * Creates a new empty file in the given path.
   */
  static newFile(path: string | JavaStringWrapper): void;

  /**
   * Creates all the missing directories in the given path. It returns true if and only if the directory was created, along with all necessary parent directories; otherwise it returns false.
   */
  static mkdirs(path: string | JavaStringWrapper): ScBoolean;

  /**
   * Extracts (unzips) a given ZIP file into the target directory.
   */
  static unzip(
    srcFile: string | JavaStringWrapper,
    targetDir: string | JavaStringWrapper
  ): void;
}

/**
 * Packages is a pre-defined, top-level object with no properties. It allows you to access Java packages and classes using their fully qualified names, as if they were the properties of the Packages object.
 */
declare class Packages { }

/**
 * API for making HTTP requests. Note that you can use this API for both HTTP and HTTPS. If requesting a resource on HTTPS endpoint, all domains and certificates are considered as trusted.
 */
declare class http {
  /**
   * Executes an HTTP GET request against a given URI, optionally with given headers and timeout.
   */
  static get(
    uri: string | JavaStringWrapper,
    headers?: ScHttpHeaders,
    timeout?: number | JavaIntegerWrapper
  ): ScHttpResponse;

  /**
   * Executes an HTTP POST request against a given URI. optionally with a given body, headers and timeout.
   */
  static post(
    uri: string | JavaStringWrapper,
    headers?: ScHttpHeaders,
    body?: string | JavaStringWrapper | JavaByte[],
    timeout?: number | JavaIntegerWrapper
  ): ScHttpResponse;

  /**
   * Executes an HTTP POST request against a given URI with given headers and a body from a file, optionally with given timeout.
   */
  static postFile(
    uri: string | JavaStringWrapper,
    headers: ScHttpHeaders,
    filepath: string | JavaStringWrapper,
    timeout?: number | JavaIntegerWrapper
  ): ScHttpResponse;

  /**
   * Executes an HTTP PUT request against a given URI, optionally with given headers and body.
   */
  static put(
    uri: string | JavaStringWrapper,
    headers?: ScHttpHeaders,
    body?: string | JavaStringWrapper | JavaByte[],
    timeout?: number | JavaIntegerWrapper
  ): ScHttpResponse;

  /**
   * Executes an HTTP PUT request against a given URI with given headers and body from a file, optionally with given timeout.
   */
  static putFile(
    uri: string | JavaStringWrapper,
    headers: ScHttpHeaders,
    filepath: string | JavaStringWrapper,
    timeout?: number | JavaIntegerWrapper
  ): ScHttpResponse;

  /**
   * Executes an HTTP PATCH request against a given URI, optionally with given headers and body, optionally with given timeout.
   */
  static patch(
    uri: string | JavaStringWrapper,
    headers?: ScHttpHeaders,
    body?: string | JavaStringWrapper | JavaByte[],
    timeout?: number | JavaIntegerWrapper
  ): ScHttpResponse;

  /**
   * Executes an HTTP PATCH request against a given URI with given headers and body from a file, optionally with given timeout.
   */
  static patchFile(
    uri: string | JavaStringWrapper,
    headers: ScHttpHeaders,
    filepath: string | JavaStringWrapper,
    timeout?: number | JavaIntegerWrapper
  ): ScHttpResponse;

  /**
   * Executes an HTTP DELETE request against a given URI, optionally with given headers and timeout.
   */
  static delete(
    uri: string | JavaStringWrapper,
    headers: ScHttpHeaders,
    timeout?: number | JavaIntegerWrapper
  ): ScHttpResponse;

  /**
   * Executes an HTTP HEAD request against a given URI, optionally with given headers and timeout.
   */
  static head(
    uri: string | JavaStringWrapper,
    headers?: ScHttpHeaders,
    timeout?: number | JavaIntegerWrapper
  ): ScHttpResponse;

  /**
   * Executes an HTTP OPTIONS request against a given URI, optionally with given headers and timeout.
   */
  static options(
    uri: string | JavaStringWrapper,
    headers?: ScHttpHeaders,
    timeout?: number | JavaIntegerWrapper
  ): ScHttpResponse;

  /**
   * Executes an HTTP TRACE request against a given URI, optionally with given headers and timeout.
   */
  static trace(
    uri: string | JavaStringWrapper,
    headers?: ScHttpHeaders,
    timeout?: number | JavaIntegerWrapper
  ): ScHttpResponse;
}

/**
 * API for accessing data on a local instance of Inspire Content Manager.
 */
declare class icm {
  /**
   * Copies a given source to a given target. It involves files as well as complete directories.
   */
  static copy(
      fromPath: string | JavaStringWrapper,
      toPath: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * Retrieves information about the files or folders located at the given location. It returns a Java array.
   */
  static list(
    pathMask: string | JavaStringWrapper,
    listType?: string | JavaStringWrapper
  ): ScIcmFileInfo[];

  /**
   * Retrieves the metadata about the file or folder located at the given location. It returns a map whose keys represent the metadata of an ICM file or folder. Values of all properties are of the string array type.
   */
  static getMetadata(path: string | JavaStringWrapper): ScObject;

  /**
   * Retrieves the metadata about the file or folder located at the given location. It returns a map whose keys represent the metadata of an ICM file or folder. Values of properties are of the property array type.
   */
  static getTypedMetadata(path: string | JavaStringWrapper): ScObject;

  /**
   * Updates the metadata of a file or folder located at the given location. It returns true if the operation succeeds.
   */
  static setMetadata(
    path: string | JavaStringWrapper,
    metadata: ScObject,
    merge: boolean | JavaBoolean
  ): ScBoolean;

  /**
   * Updates the metadata of a file or folder located at the given location. It returns true if the operation succeeds.
   */
  static setTypedMetadata(
      path: string | JavaStringWrapper,
      metadata: ScObject,
      merge: boolean | JavaBoolean
  ): ScBoolean;

  /**
   * Retrieves the history of a file located at the given location. Returns a Java array. The returned result does not include records whose content has been deleted.
   */
  static listFileHistory(path: string | JavaStringWrapper): ScIcmFileHistory[];

  /**
   * Moves a file or folder to a different location. You can also rename the item using this method. The Default soft remove/rename option configured in ICM's Server Administration dictates what actually happens to the original instance of the file/folder when moved.
   */
  static move(
    fromPath: string | JavaStringWrapper,
    toPath: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * Deletes a single file or non-empty folder. The Default soft remove/rename option configured in ICM's Server Administration dictates what actually happens to the original instance of the file/folder when moved.
   */
  static remove(path: string | JavaStringWrapper): ScBoolean;

  /**
   * Creates one folder. If you set createPath to true, it creates the folder including all the other folders in the file path.
   */
  static makeDirectory(
    path: string | JavaStringWrapper,
    createPath?: boolean | JavaBoolean
  ): ScBoolean;

  /**
   * Uploads data, using a given input stream, into a file at the given ICM location.
   */
  static upload(
    stream: JavaInputStream,
    path: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * Uploads data, using the given bytes, into a file at the given ICM location.
   */
  static uploadBytes(
    data: JavaByte[],
    path: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * Downloads a file from a given ICM location.
   */
  static download(path: string | JavaStringWrapper): JavaInputStream;

  /**
   * Downloads a file from a given ICM location.
   */
  static downloadBytes(path: string | JavaStringWrapper): JavaByte[];

  /**
   * Labels the given file or folder.
   */
  static setLabel(
    path: string | JavaStringWrapper,
    label: string | JavaStringWrapper,
    recursive?: boolean | JavaBoolean,
    comment?: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * Removes a given label from a file or folder.
   */
  static removeLabel(
    path: string | JavaStringWrapper,
    label: string | JavaStringWrapper,
    recursive?: boolean | JavaBoolean
  ): ScBoolean;

  /**
   * Assigns a specific alias to a specifically labeled file or folder.
   */
  static aliasLabel(
    path: string | JavaStringWrapper,
    label: string | JavaStringWrapper,
    aliasName: string | JavaStringWrapper,
    recursive?: boolean | JavaBoolean,
    comment?: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * Sets an approval state to a given file.
   */
  static setApprovalState(
    path: string | JavaStringWrapper,
    state: string | JavaStringWrapper,
    user?: string | JavaStringWrapper,
    from?: JavaLong,
    to?: JavaLong,
    comment?: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * Downloads a file preview from a given ICM location.
   */
  static getFilePreview(
    path: string | JavaStringWrapper,
    size?: string | JavaStringWrapper
  ): JavaByte[];
}

/**
 * Methods for integrating with Inspire Interactive.
 */
declare class ii {
  /**
   * Sends a SOAP request with provided body content to an Inspire Interactive endpoint. The returned XML is converted into JSON. If the XML contains textual content within elements with attributes, then the textual content is converted into a content property.
   */
  static sendRequest(
    soapBody: string | JavaStringWrapper,
    url: string | JavaStringWrapper,
    user: string | JavaStringWrapper,
    password: string | JavaStringWrapper,
    timeout?: number | JavaIntegerWrapper
  ): ScInteractiveResponse;
}

/**
 * API for executing operations on Inspire Production Servers.
 */
declare class ips {
  /**
   * Executes a RUNW command on a single Inspire Production Server managed by a Scaler cluster. This run is identical to the RUNW commands that are run from the Document Creator module in a workflow and is visible on the IPS monitoring page.
   */
  static runw(
    productionTemplate: string | JavaStringWrapper,
    commands: string | JavaStringWrapper[]
  ): ScRunwResponse;
}

/**
 * Interoperability with underlying Java, typically using the Java classes from Scripting. For more information about Java interoperability, see the Oracle Nashorn tutorials.
 */
declare class Java {
  /**
   * Retrieves the definition of a Java class which can be instantiated or used for static invocations.
   */
  static type<T>(className: string | JavaStringWrapper): JavaClass<T>;
  /**
   * Extends an existing Java class with a new functionality.
   */
  static extend<T>(className: string | JavaStringWrapper): JavaClass<T>;
  /**
   * Converts a Java array into its JavaScript counterpart.
   */
  static from(value: JavaArray): ScObject[];
  static to<T, R>(value: Array<T>, type?: string): R;
}

/**
 * API used for working with an Inspire Scaler job.
 */
declare class job {
  /**
   * Fails a job, optionally with a custom error message. This failure causes the scripting module to stop its execution and to enter the Failed state.
   */
  static fail(message?: string | JavaStringWrapper): void;
  /**
   * Sets the priority of a job which is saved in this system variable: ${sys.job-priority}. Jobs with higher priority value (1-100) are processed by Inspire Production Server first.
   */
  static setPriority(priority: number | JavaIntegerWrapper): void;
  /**
   * Get detailed information if a job failure occurs.
   */
  static getErrorDetail(): ScJobErrorDetail;
}

/**
 * This chapter lists all the API methods for working with Scaler jobs.
 */
declare class jobs {
  /**
   * Retrieves the information about an Inspire Scaler job based on the defined job ID. If the defined job ID is invalid (e.g. the wrong format or the job is not in the system), the job fails.
   */
  static info(jobId: string | JavaStringWrapper): ScJobInfo;
  /**
   * Checks whether the job with the defined ID exists in the system.
   */
  static exists(jobId: string | JavaStringWrapper): ScBoolean;
  /**
   * This method can only be invoked from within the System Processes workflows. It cancels a job with a defined ID. This method is asynchronous, which means that its execution may not cancel the job immediately. To learn more, see the Job Canceling Behavior section of the Inspire Scaler User Manual.
   */
  static cancel(jobId: string | JavaStringWrapper): void;
}

/**
 * API methods for server related tasks.
 */
declare class server {
  /**
   * Gets a logger which can be used to log messages using Scaler's logging framework. Optionally, you can name the logger by passing the 'name' parameter but additional configuration is required in the 'custom_logger_config.xml' file. Avoid naming loggers dynamically using variables (e.g. by using the job ID) to prevent Scaler from running out of memory.
   */
  static getLogger(name?: string): ScServerLogger;
}

/**
 * API used for executing SQL commands in custom databases configured in Inspire Scaler Administration.
 */
declare class sql {
  /**
   * Executes an SQL statement that may be an INSERT, UPDATE, or DELETE statement or an SQL statement that does not return anything, such as an SQL DDL statement. This method is not secure enough because it is not resistant to SQL injections. You should never use it in queries that work with variables from the requester.
   */
  static execute(
    alias: string | JavaStringWrapper,
    command: string | JavaStringWrapper
  ): ScInteger;

  /**
   * Executes an SQL statement that may be an INSERT, UPDATE, or DELETE statement or an SQL statement that does not return anything, such as an SQL DDL statement. The statement should not be concatenated with input data. Use placeholders in the command and params objects to prevent SQL injection attacks. The syntax of the placeholder parameter is identical to the syntax of variables in Inspire Scaler workflows, i.e ${paramName}. When the ${ string is meant to be an actual part of a statement (not a parameter reference), it must be escaped: ^${.
   */
  static executeWithParams(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    params: ScSqlParametersObject
  ): ScInteger;

  /**
   * Executes an SQL query that returns an array of results containing strings. The declare function is then called for each result (row). This method is not secure enough because it is not resistant to SQL injections. You should never use it in queries that work with variables from the requester.
   */
  static eachRow(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    rowFunction: (row: ScString[]) => void
  ): void;

  /**
   * Executes an SQL query that returns an array of results containing strings. The declare function is then called for each result (row). The query should not be concatenated with input data. Use placeholders in the sql and params objects to prevent SQL injection attacks. The syntax of the placeholder parameter is identical to the syntax of variables in Inspire Scaler workflows, i.e ${paramName}. When ${ string is meant to be an actual part of a statement (not a parameter reference), it must be escaped: ^${.
   */
  static eachRowWithParams(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    params: ScSqlParametersObject,
    rowFunction: (row: ScString[]) => void
  ): void;

  /**
   * Executes an SQL query that returns an array of results containing native Java values. The declare function is then called for each result (row). This method is not secure enough because it is not resistant to SQL injections. You should never use it in queries that work with variables from the requester.
   */
  static eachRowNative(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    rowFunction: (row: ScObject[]) => void
  ): void;

  /**
   * Executes an SQL query that returns an array of results containing native Java values. The declare function is then called for each result (row). The query should not be concatenated with input data. Use placeholders in the sql and params objects to prevent SQL injection attacks. The syntax of the placeholder parameter is identical to the syntax of variables in Inspire Scaler workflows, i.e ${paramName}. When ${ string is meant to be an actual part of a statement (not a parameter reference), it must be escaped: ^${.
   */
  static eachRowNativeWithParams(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    params: ScSqlParametersObject,
    rowFunction: (row: ScObject[]) => void
  ): void;

  /**
   * Executes an SQL query that returns an array of results containing JavaScript objects. The declare function is then called for each result (row). This method is not secure enough because it is not resistant to SQL injections. You should never use it in queries that work with variables from the requester.
   */
  static eachRowObject(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    rowFunction: (row: ScObject) => void
  ): void;

  /**
   * Executes an SQL query that returns an array of results containing JavaScript objects. The declare function is then called for each result (row). The query should not be concatenated with input data. Use placeholders in the sql and params objects to prevent SQL injection attacks. The syntax of the placeholder parameter is identical to the syntax of variables in Inspire Scaler workflows, i.e ${paramName}. When ${ string is meant to be an actual part of a statement (not a parameter reference), it must be escaped: ^${.
   */
  static eachRowObjectWithParams(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    params: ScSqlParametersObject,
    rowFunction: (row: ScObject) => void
  ): void;

  /**
   * Executes an SQL query that returns an array of results containing JavaScript objects. The declare function is then called for each result (row). This method is not secure enough because it is not resistant to SQL injections. You should never use it in queries that work with variables from the requester.
   */
  static eachRowNativeObject(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    rowFunction: (row: ScObject) => void
  ): void;

  /**
   * Executes an SQL query that returns an array of results containing JavaScript objects. The declare function is then called for each result (row). The query should not be concatenated with input data. Use placeholders in the sql and params objects to prevent SQL injection attacks. The syntax of the placeholder parameter is identical to the syntax of variables in Inspire Scaler workflows, i.e ${paramName}. When ${ string is meant to be an actual part of a statement (not a parameter reference), it must be escaped: ^${.
   */
  static eachRowNativeObjectWithParams(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    params: ScSqlParametersObject,
    rowFunction: (row: ScObject) => void
  ): void;

  /**
   * Executes the given SQL query which returns the (JavaScript) objects within a selected ScInt of rows, after a defined offset. Note that due to limitation of JSON, all values from all rows are strings. If you want native objects, you should use the rowNativeObjects method instead. This method is not secure enough because it is not resistant to SQL injections. You should never use it in queries that work with variables from the requester.
   */
  static rowObjects(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    offset?: number | JavaIntegerWrapper,
    maxRows?: number | JavaIntegerWrapper
  ): ScSqlResultObjects;

  /**
   * Executes an SQL query that returns the (JavaScript) objects within a selected number of rows, after a defined offset. Note that due to a JSON limitation, all values from all rows are strings. If you want native objects, you should use the rowNativeObjectsWithParams method instead. Use placeholders in the sql and params objects to prevent SQL injection attacks. The syntax of the placeholder parameter is identical to the syntax of variables in Inspire Scaler workflows, i.e ${paramName}. When ${ string is meant to be an actual part of a statement (not a parameter reference), it must be escaped: ^${.
   */
  static rowObjectsWithParams(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    params: ScSqlParametersObject,
    offset?: number | JavaIntegerWrapper,
    maxRows?: number | JavaIntegerWrapper
  ): ScSqlResultObjects;

  /**
   * Executes an SQL query that returns the Java native objects within a selected number of rows, after a defined offset. This method is not secure enough because it is not resistant to SQL injections. You should never use it in queries that work with variables from the requester.
   */
  static rowNativeObjects(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    offset?: number | JavaIntegerWrapper,
    maxRows?: number | JavaIntegerWrapper
  ): ScSqlResultNativeObjects;

  /**
   * Executes an SQL query that returns the Java native objects within a selected number of rows, after a defined offset. The query should not be concatenated with input data. Use placeholders in the sql and params objects to prevent SQL injection attacks. The syntax of the placeholder parameter is identical to the syntax of variables in Inspire Scaler workflows, i.e ${paramName}. When ${ string is meant to be an actual part of a statement (not a parameter reference), it must be escaped: ^${.
   */
  static rowNativeObjectsWithParams(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    params: ScSqlParametersObject,
    offset?: number | JavaIntegerWrapper,
    maxRows?: number | JavaIntegerWrapper
  ): ScSqlResultNativeObjects;

  /**
   * Executes an SQL query that returns the values within a selected number of rows, after a defined offset. This method is not secure enough because it is not resistant to SQL injections. You should never use it in queries that work with variables from the requester.
   */
  static rows(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    offset?: number | JavaIntegerWrapper,
    maxRows?: number | JavaIntegerWrapper
  ): ScSqlResult;

  /**
   * Executes an SQL query that returns the values within a selected number of rows, after a defined offset. The query should not be concatenated with input data. Use placeholders in the sql and params objects to prevent SQL injection attacks. The syntax of the placeholder parameter is identical to the syntax of variables in Inspire Scaler workflows, i.e ${paramName}. When ${ string is meant to be an actual part of a statement (not a parameter reference), it must be escaped: ^${.
   */
  static rowsWithParams(
    alias: string | JavaStringWrapper,
    sql: string | JavaStringWrapper,
    params: ScSqlParametersObject,
    offset?: number | JavaIntegerWrapper,
    maxRows?: number | JavaIntegerWrapper
  ): ScSqlResult;
}

/**
 * API used for working with Inspire Scaler statistics.
 */
declare class stats {
  /**
   * Returns the average IPS usage (in percents) for a defined period of time (between 1 and 1440 minutes).
   */
  static avgRunningIpsThreads(minutes: number | JavaIntegerWrapper): JavaDouble;

  /**
   * Returns the average job wait times (in milliseconds) within the cluster for a defined period of time (between 1 and 1440 minutes).
   */
  static avgWaitTimes(minutes: number | JavaIntegerWrapper): JavaDouble;

  /**
   * Returns the ScInt of jobs (includes all job types) that failed to meet the SLA criteria for a defined period of time (between 1 and 1440 minutes).
   */
  static slaCriteriaNotMet(minutes: number | JavaIntegerWrapper): JavaLong;

  /**
   * Returns the average CPU usage (in percents) for a defined period of time (between 1 and 1440 minutes).
   */
  static avgCpuUsages(minutes: number | JavaIntegerWrapper): JavaDouble;

  /**
   * Returns the average CPU usage (in percents) of a node for a defined period of time (between 1 and 1440 minutes).
   */
  static avgCpuUsagesLocalNode(
    minutes: number | JavaIntegerWrapper
  ): JavaDouble;

  /**
   * Returns the average amount of used memory (in percents) for a defined period of time (between 1 and 1440 minutes).
   */
  static avgMemoryUsages(minutes: number | JavaIntegerWrapper): JavaDouble;

  /**
   * Returns the average amount of used memory (in percents) of a node for a defined period of time (between 1 and 1440 minutes).
   */
  static avgMemoryUsagesLocalNode(
    minutes: number | JavaIntegerWrapper
  ): JavaDouble;

  /**
   * Returns the average amount of used disk space (in percents) for a defined period of time (between 1 and 1440 minutes). The calculated average takes into account all the disks on which your cluster nodes are installed.
   */
  static avgDiskUsages(minutes: number | JavaIntegerWrapper): JavaDouble;

  /**
   * Returns the average amount of used disk space (in percents) for a defined period of time (between 1 and 1440 minutes). The calculated average takes into account the disk on which the local node is installed.
   */
  static avgDiskUsagesLocalNode(
    minutes: number | JavaIntegerWrapper
  ): JavaDouble;

  /**
   * Returns the average amount of used disk space (in percents) for a defined period of time (between 1 and 1440 minutes). The calculated average takes into account the disk on which your shared storage is installed from your cluster's perspective.
   */
  static avgSharedStorageUsages(
    minutes: number | JavaIntegerWrapper
  ): JavaDouble;

  /**
   * Returns the average amount of used disk space (in percents) for a defined period of time (between 1 and 1440 minutes). The calculated average takes into account the disk on which your shared storage is installed from the local node's perspective.
   */
  static avgSharedStorageUsagesLocalNode(
    minutes: number | JavaIntegerWrapper
  ): JavaDouble;
}

/**
 * This chapter lists the API methods related to system maintenance.
 */
declare class sys {
  /**
   * This method can only be invoked from within the System Processes workflows. It deletes old, completed jobs from the database and the shared storage. Optionally, you can only delete jobs belonging to a specific workflow group. The method deletes jobs from the shared storage asynchronously. The completion of the Inspire Scaler job that runs the sys.deleteOldJobs method does not mean that the jobs have been deleted from the shared storage yet. To monitor the progress of jobs being deleted, see the System Info section of Administration.
   */
  static deleteOldJobs(
    days: number | JavaIntegerWrapper,
    workflowGroup?: string | JavaStringWrapper
  ): void;
}

/**
 * This chapter lists the API methods related to workflow deployment.
 */
declare class workflows {
  /**
   * This method can only be invoked from within the System Processes workflows. It lists all the workflows that exist in the system.
   */
  static list(): ScWorkflow[];

  /**
   * This method can only be invoked from within the System Processes workflows. It marks a specific workflow version for deployment. It returns a JavaBoolean value (true or false) based on whether or not the operation was successful.
   */
  static markVersionForDeploy(
    workflowName: string | JavaStringWrapper,
    version: number | JavaIntegerWrapper,
    workflowPath?: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * This method can only be invoked from within the System Processes workflows. It unmarks a specific workflow version that is marked for deployment. It returns a JavaBoolean value (true or false) based on whether or not the operation was successful.
   */
  static unmarkVersionForDeploy(
    workflowName: string | JavaStringWrapper,
    workflowPath?: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * This method can only be invoked from within the System Processes workflows. It deploys a specific workflow, specifically the version that has been marked for deployment. If a version has not been marked for deployment, the latest version is deployed by default. It returns a JavaBoolean value (true or false) based on whether or not the operation was successful.
   */
  static deploy(
    workflowName: string | JavaStringWrapper,
    workflowPath?: string | JavaStringWrapper
  ): ScBoolean;

  /**
   * This method can only be invoked from within the System Processes workflows. It undeploys a specific deployed workflow. It returns a JavaBoolean value (true or false) based on whether or not the operation was successful.
   */
  static undeploy(
    workflowName: string | JavaStringWrapper,
    workflowPath?: string | JavaStringWrapper
  ): ScBoolean;
}

/**
 * API for working with XML.
 */
declare class xml {
  /**
   * Converts XML structures into JSON strings. Converting XML files containing CDATA is not supported. The conversion keeps namespaces. Textual content within elements with attributes is converted into a content property. If you attempt to convert a regular string (not XML), an empty object is returned.
   * @param keepStrings If the value of the 'keepStrings' argument is set to 'true', string values are not converted to boolean or numeric values. They remain strings.
   */
  static toJson(xml: string | JavaStringWrapper, keepStrings?: ScBoolean): ScString;

  /**
   * Converts JSON strings into XML structures. The conversion ignores empty JSON fields.
   */
  static fromJson(json: string | JavaStringWrapper): ScString;
}

/**
 * API for working with access tokens.
 */
declare class accesstokens {
  /**
   * Returns an object for working with a specific access token.
   */
  static getAccessToken(alias: string | JavaStringWrapper): ScAccessToken
}
